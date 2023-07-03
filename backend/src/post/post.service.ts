import { Injectable } from '@nestjs/common';
import { PostRepository } from './post.repository';
import { CreatePostInput, CreatePostOutput } from './dtos/create.dto';
import { UpdatePostInput, UpdatePostOutput } from './dtos/update.dto';
import { DeletePostOutput } from './dtos/delete.dto';
import { CategoryRepository } from 'src/category/category.repository';
import { In } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepo: PostRepository,
    private readonly categoryRepo: CategoryRepository,
  ) {}

  async getAllPosts() {
    return this.postRepo.find({
      order: {
        createdAt: 'DESC',
      },
      relations: {
        categories: true,
      },
    });
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
