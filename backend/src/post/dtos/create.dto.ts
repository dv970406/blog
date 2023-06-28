import { Post } from '../post.entity';
import { OmitType } from '@nestjs/mapped-types';

export class CreatePostInput extends OmitType(Post, [
  'id',
  'createdAt',
  'updatedAt',
]) {
  categoriesId: string[];
}
export class CreatePostOutput {
  createdPost: Post;
}
