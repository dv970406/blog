"use client";
import { useGetAllPosts } from "@/client/mutations/post";
import PostItem from "@/components/organisms/post/PostItem";
import { IGetAllPostsOutput, IPost } from "@/types/post";
import React from "react";
import InfiniteScrolling from "../shared/InfiniteScrolling";
import { useRecoilValue } from "recoil";
import { postsFiltererState } from "@/recoil/posts-filterer";

const DISPLAY_DATA = [
  {
    id: "1",
    title: "SAMPLE1 TITLE",
    categories: ["React", "NextJS"],
  },
  {
    id: "2",
    title: "SAMPLE2 TITLE",
    categories: ["React", "NextJS"],
  },
  {
    id: "3",
    title: "SAMPLE3 TITLE",
    categories: ["React", "NextJS"],
  },
  {
    id: "4",
    title: "SAMPLE4 TITLE",
    categories: ["React", "NextJS"],
  },
  {
    id: "5",
    title: "SAMPLE5 TITLE",
    categories: ["React", "NextJS"],
  },
  {
    id: "6",
    title: "SAMPLE6 TITLE",
    categories: ["React", "NextJS"],
  },
];

interface IPostsDisplay {
  postsData: IGetAllPostsOutput;
}
const PostsDisplay = async ({ postsData }: IPostsDisplay) => {
  const postsFilterer = useRecoilValue(postsFiltererState);

  const {
    data: allPostsData,
    fetchNextPage,
    hasNextPage,
    isLoading: getAllPostsLoading,
    isFetching: getAllPostsFetching,
  } = useGetAllPosts(postsFilterer);

  const posts =
    allPostsData?.pages.flatMap((page) => page.datas) || postsData.datas;
  return (
    <section className="py-4">
      <InfiniteScrolling
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        dataType="포스팅"
        isEmptyData={posts.length === 0}
        isLoading={getAllPostsFetching || getAllPostsLoading}
      >
        <ul className="grid grid-cols-1 gap-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts?.map((postData) => (
            <PostItem key={postData.title} {...postData} />
          ))}
        </ul>
      </InfiniteScrolling>
    </section>
  );
};

export default PostsDisplay;
