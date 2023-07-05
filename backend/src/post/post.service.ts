import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostInput, CreatePostOutput } from './dtos/create.dto';
import { UpdatePostInput, UpdatePostOutput } from './dtos/update.dto';
import { DeletePostOutput } from './dtos/delete.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { In, Like } from 'typeorm';
import { FilteringPosts, GetAllPostsOutput } from './dtos/gets.dto';
import { GET_COUNT } from 'src/core/core.variables';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly categoryRepo: CategoryRepository,
  ) {}

  async getAllPosts({
    categoriesName,
    keyword,
    pageParam,
  }: FilteringPosts): Promise<GetAllPostsOutput> {
    // 인피니티 스크롤 구현

    const findPosts = await this.postRepo.find({
      where: {
        ...(keyword && { title: Like(`%${keyword}%`) }),

        ...(categoriesName && {
          categories: {
            categoryName: In(categoriesName),
          },
        }),
      },
      order: {
        createdAt: 'DESC',
        categories: {
          createdAt: 'ASC',
        },
      },
      relations: {
        categories: true,
      },

      // 가장 흔한 패턴의 take, skip 사용
      take: GET_COUNT,
      skip: (+pageParam - 1) * GET_COUNT,
    });

    let isLastPage = false;
    // 개수가 5개 미만이면 다음에는 더이상 가져올 것이 없다는 뜻
    if (findPosts.length < GET_COUNT) {
      isLastPage = true;
    }

    return {
      datas: findPosts,
      isLastPage,
    };
  }

  async getPostById(postId: string) {
    return this.postRepo.findPost(postId);
  }

  async createPost(
    createPostInput: CreatePostInput,
    // imageFiles: Express.Multer.File[],
  ): Promise<CreatePostOutput> {
    try {
      // const imageFilesPathArray = imageFiles.map((imageFile) => imageFile.path);

      const categories = await this.categoryRepo.find({
        where: {
          id: In(createPostInput.categoriesId),
        },
      });

      const createdPost = await this.postRepo.save({
        ...createPostInput,
        categories,
        // imageFiles: imageFilesPathArray,
      });

      return { createdPost };
    } catch (error) {
      console.log('createdPost Error : ', error);
    }
  }

  async updatePost(
    postId: string,
    updatedPostInput: UpdatePostInput,
    // imageFiles: Express.Multer.File[],
  ): Promise<UpdatePostOutput> {
    try {
      const findPost = await this.postRepo.findPost(postId);

      const updatedPost = await this.postRepo.save({
        id: findPost.id,
        ...updatedPostInput,
      });

      return { updatedPost };
    } catch (error) {
      console.log('updatedPost Error : ', error);
    }
  }

  async deletePost(postId: string): Promise<DeletePostOutput> {
    try {
      await this.postRepo.isExistPost(postId);

      await this.postRepo.delete({ id: postId });
      return {
        deletedPostId: postId,
      };
    } catch (error) {
      console.log('deletedPost Error : ', error);
    }
  }
}
