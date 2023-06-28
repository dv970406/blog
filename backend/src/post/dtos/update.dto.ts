import { Post } from '../post.entity';
import { OmitType, PartialType } from '@nestjs/mapped-types';

export class UpdatePostInput extends PartialType(
  OmitType(Post, ['id', 'createdAt', 'updatedAt']),
) {
  categoriesId: string[];
}
export class UpdatePostOutput {
  updatedPost: Post;
}
