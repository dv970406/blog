"use client";
import InputWithTitle from "@/components/molecules/inputs/InputWithTitle";
import React, { useRef } from "react";

interface ICreatePostForm {}
const CreatePostForm = ({}: ICreatePostForm) => {
  const titleRef = useRef<HTMLInputElement>(null);
  return (
    <section className="p-4 mt-10 rounded-lg bg-custom-darkgray">
      <InputWithTitle title="Title" inputRef={titleRef} />
    </section>
  );
};

export default CreatePostForm;
