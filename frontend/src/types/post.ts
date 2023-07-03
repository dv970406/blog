import { ICategory } from "./category";
import { ICoreEntity } from "./shared";

export interface IPost extends ICoreEntity {
  title: string;
  categories: ICategory[];
}
export interface IPostDetail extends IPost {
  content: string;
}
