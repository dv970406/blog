import { Injectable } from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { CreateCommentInput, CreateCommentOutput } from './dtos/create.dto';
import { DeleteCommentOutput } from './dtos/delete.dto';
import { PostRepository } from 'src/post/post.repository';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentRepo: CommentRepository,
    private readonly postRepo: PostRepository,
  ) {}
  async createComment(
    createCommentInput: CreateCommentInput,
  ): Promise<CreateCommentOutput> {
    try {
      const findPost = await this.postRepo.findPost(createCommentInput.postId);

      const createdComment = await this.commentRepo.save(
        await this.commentRepo.create({
          ...createCommentInput,
          post: findPost,
        }),
      );

      return { createdComment };
    } catch (error) {
      console.log('createdPost Error : ', error);
    }
  }

  async deleteComment(commentId: string): Promise<DeleteCommentOutput> {
    try {
      await this.commentRepo.exist({ where: { id: commentId } });

      await this.commentRepo.delete({ id: commentId });
      return {
        deletedCommentId: commentId,
      };
    } catch (error) {
      console.log('deletedComment Error : ', error);
    }
  }
}
