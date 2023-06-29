import PostsDisplay from "@/components/templates/post/PostsDisplay";
import PostsFilterer from "@/components/templates/post/PostsFilterer";
import React from "react";

const PostPage = () => {
  return (
    <>
      <PostsFilterer />
      <PostsDisplay />
    </>
  );
};

export default PostPage;
