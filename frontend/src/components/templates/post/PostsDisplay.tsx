import PostItem from "@/components/organisms/post/PostItem";
import { IPost } from "@/types/post";
import React from "react";

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
  postsData: Promise<IPost[]>;
}
const PostsDisplay = async ({ postsData }: IPostsDisplay) => {
  const posts = (await postsData) || DISPLAY_DATA;
  return (
    <section className="py-4">
      <ul className="grid grid-cols-1 gap-10 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((postData) => (
          <PostItem key={postData.title} {...postData} />
        ))}
      </ul>
    </section>
  );
};

export default PostsDisplay;
