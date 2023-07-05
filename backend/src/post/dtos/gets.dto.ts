import {
  InfiniteScrollingInput,
  InfiniteScrollingOutput,
} from 'src/core/core.dto';
import { Post } from '../post.entity';

export class FilteringPosts extends InfiniteScrollingInput {
  categoriesName: string[];
  keyword: string;
}

export class GetAllPostsOutput extends InfiniteScrollingOutput<Post[]> {}
