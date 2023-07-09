"use client";
import { useInfiniteQuery } from "@tanstack/react-query";
import { QueryKeys } from "../client";
import { IGetAllPostsOutput } from "@/types/post";
import { getAllPosts } from "../fetchers/post";
import { TPostsFilterer } from "@/recoil/posts-filterer";

export const useGetAllPosts = ({ keyword, categoriesName }: TPostsFilterer) => {
  const result = useInfiniteQuery<IGetAllPostsOutput>(
    [QueryKeys.POST],
    ({ pageParam = 1 }) => getAllPosts({ keyword, categoriesName, pageParam }),
    {
      // 만약 return하는 값이 없을 경우에는 hasNextPage가 false가 된다. 더이상 인피니티스크롤 감지안함
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.isLastPage) return;
        const nextPage = allPages.length + 1;
        return nextPage;
      },

      enabled: !!keyword || categoriesName.length > 0,
    }
  );

  return result;
};
