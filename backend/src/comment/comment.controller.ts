import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentInput, CreateCommentOutput } from './dtos/create.dto';
import { DeleteCommentOutput } from './dtos/delete.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(
    @Body() createCommentInput: CreateCommentInput,
  ): Promise<CreateCommentOutput> {
    return this.commentService.createComment(createCommentInput);
  }

  @Delete('/:commentId')
  async deleteComment(
    @Param() commentId: string,
  ): Promise<DeleteCommentOutput> {
    return this.commentService.deleteComment(commentId);
  }
}
