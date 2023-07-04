import PostsDisplay from "@/components/templates/post/PostsDisplay";
import PostsFilterer from "@/components/templates/post/PostsFilterer";
import { ICategory } from "@/types/category";
import { IGetAllPostsOutput } from "@/types/post";
import React, { Suspense } from "react";

// export const getPosts = async () => {
//   const response = await fetch(
//     process.env.SERVER_URL +
//       `/post?keyword=${""}&categoriesName=${""}&pageParam=1`
//   );

//   const allPostsData = await response.json();

//   // if (!response.ok) {
//   //   redirect("/post");
//   // }

//   return allPostsData;
// };
// export const getCategories = async () => {
//   const response = await fetch(process.env.SERVER_URL + `/category`);

//   const categoriesData = await response.json();

//   return categoriesData;
// };

const PostPage = async () => {
  // const categoriesData: ICategory[] = await getCategories();
  // const postsData: IGetAllPostsOutput = await getPosts();

  return (
    <>
      {/* <PostsFilterer categoriesData={categoriesData} />
      <PostsDisplay postsData={postsData} /> */}
    </>
  );
};

export default PostPage;
