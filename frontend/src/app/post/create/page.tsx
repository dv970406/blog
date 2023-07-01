import React from "react";
import AuthWrapper from "./AuthWrapper";
import CreatePostForm from "@/components/templates/post/CreatePostForm";

const CreatePostPage = () => {
  return (
    <AuthWrapper>
      <CreatePostForm />
    </AuthWrapper>
  );
};

export default CreatePostPage;
