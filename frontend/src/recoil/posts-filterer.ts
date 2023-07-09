import { IGetAllPostsInput } from "@/types/post";
import { atom } from "recoil";

export type TPostsFilterer = Omit<IGetAllPostsInput, "pageParam">;
export const postsFiltererState = atom<TPostsFilterer>({
  key: "postsFiltererState",
  default: {
    categoriesName: [],
    keyword: "",
  },
});
