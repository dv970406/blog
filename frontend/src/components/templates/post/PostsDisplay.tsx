import PostItem from "@/components/organisms/post/PostItem";
import React from "react";

const PostsDisplay = () => {
  const dsa: any[] = [];
  return (
    <section className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {dsa.map((postData) => (
        <PostItem {...postData} />
      ))}
    </section>
  );
};

export default PostsDisplay;
