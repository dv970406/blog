"use client";

import CategoryBadge from "@/components/molecules/boxes/CategoryBadge";
import InputWithFilterer from "@/components/molecules/inputs/InputWithFilterer";
import { usePostsFilterer } from "@/hooks/post/posts-filterer";
import { ICategory } from "@/types/category";
import React from "react";

interface IPostsFilterer {
  categoriesData: ICategory[];
}
const PostsFilterer = ({ categoriesData }: IPostsFilterer) => {
  const { postsFilterer, handleChangeCategory, handleChangeTitle } =
    usePostsFilterer();

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-40">
      <div className="w-full sm:w-2/3">
        <InputWithFilterer
          isSearchInput
          placeholder="제목으로 필터링"
          onChange={handleChangeTitle}
        />
      </div>
      <ul className="flex w-full gap-2 sm:w-2/3">
        {/* <InputWithFilterer
          list="posts-filterer"
          name="categories"
          placeholder="카테고리"
          onChange={handleChangeFilterer}
          multiple
        />

        <datalist id="posts-filterer">
          {categoriesData.map((category) => (
            <option key={category.id} value={category.categoryName} />
          ))}
        </datalist> */}

        {categoriesData.map((category) => (
          <CategoryBadge
            key={category.id}
            isFilterer
            isClicked={postsFilterer.categoriesName.includes(
              category.categoryName
            )}
            categoryName={category.categoryName}
            onClick={handleChangeCategory}
          />
        ))}
      </ul>
    </section>
  );
};

export default PostsFilterer;
