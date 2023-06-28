import { OmitType } from '@nestjs/mapped-types';
import { Comment } from '../comment.entity';

export class CreateCommentInput extends OmitType(Comment, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  postId: string;
}
export class CreateCommentOutput {
  createdComment: Comment;
}
