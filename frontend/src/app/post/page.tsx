import PostsDisplay from "@/components/templates/post/PostsDisplay";
import PostsFilterer from "@/components/templates/post/PostsFilterer";
import React, { Suspense } from "react";

export const getPosts = async () => {
  const response = await fetch(process.env.SERVER_URL + `/post`);

  const postsData = await response.json();

  // if (!response.ok) {
  //   redirect("/post");
  // }

  return postsData;
};
export const getCategories = async () => {
  const response = await fetch(process.env.SERVER_URL + `/category`);

  const categoriesData = await response.json();

  return categoriesData;
};

const PostPage = async () => {
  const categoriesData = await getCategories();
  const postsData = getPosts();

  return (
    <>
      <PostsFilterer categoriesData={categoriesData} />
      <Suspense fallback={<p>loading...</p>}>
        <PostsDisplay postsData={postsData} />
      </Suspense>
    </>
  );
};

export default PostPage;
