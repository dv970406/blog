import Title from "@/components/atomics/Title";
import MarkdownViewer from "@/components/templates/post/MarkdownViewer";
import { IPostDetail } from "@/types/post";
import { NextPage } from "next";
import { redirect } from "next/navigation";
import React from "react";

// export const getPostById = async (postId: string) => {
//   const response = await fetch(process.env.SERVER_URL + `/post/${postId}`);

//   const postDetailData = await response.json();

//   // if (!response.ok) {
//   //   redirect("/post");
//   // }

//   return postDetailData;
// };

interface IPostDetailPage {
  params: {
    postId: string;
  };
}

const PostDetailPage = async ({ params }: IPostDetailPage) => {
  // const postDetailData: IPostDetail = await getPostById(params.postId);
  return (
    <article className="mt-10">
      {/* <Title title={postDetailData.title} />
      <MarkdownViewer content={postDetailData.content} /> */}
    </article>
  );
};

export default PostDetailPage;
