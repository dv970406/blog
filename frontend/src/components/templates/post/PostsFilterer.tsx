import InputWithFilterer from "@/components/molecules/inputs/InputWithFilterer";
import { ICategory } from "@/types/category";
import React from "react";

interface IPostsFilterer {
  categoriesData: ICategory[];
}
const PostsFilterer = ({ categoriesData }: IPostsFilterer) => {
  return (
    <section className="flex items-center justify-center gap-8 py-40">
      <div className="w-1/6">
        <InputWithFilterer
          list="posts-filterer"
          name="filterer"
          placeholder="카테고리"
        />

        <datalist id="posts-filterer">
          {categoriesData.map((category) => (
            <option key={category.id} value={category.categoryName} />
          ))}
        </datalist>
      </div>
      <div className="w-3/6">
        <InputWithFilterer isSearchInput placeholder="제목으로 필터링" />
      </div>
    </section>
  );
};

export default PostsFilterer;
