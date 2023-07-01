"use client";
import Input from "@/components/molecules/Input";
import React, { useRef } from "react";

const CreatePostForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  return <Input title="제목을 입력하세요." inputRef={titleRef} />;
};

export default CreatePostForm;
