import { ICategory } from "./category";
import {
  ICoreEntity,
  IInfiniteScrollingInput,
  IInfiniteScrollingOutput,
} from "./shared";

export interface IPost {
  id: string;
  title: string;
  categories: ICategory[];
}
export interface IPostDetail extends IPost {
  content: string;
}

export interface IGetAllPostsInput extends IInfiniteScrollingInput {
  keyword: string;
  categoriesName: string[];
}

export interface IGetAllPostsOutput extends IInfiniteScrollingOutput<IPost[]> {}
