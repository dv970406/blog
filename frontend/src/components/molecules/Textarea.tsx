import SubTitle from "@/components/atomics/SubTitle";
import React, { TextareaHTMLAttributes, LegacyRef } from "react";

interface ITextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  textareaRef: LegacyRef<HTMLTextAreaElement>;
  title: string;
}
const Textarea = ({ textareaRef, title }: ITextarea) => {
  return (
    <>
      <SubTitle title={title} />
      <textarea
        ref={textareaRef}
        className="w-full h-48 p-2 rounded-lg outline-none bg-custom-black ring-transition"
      />
    </>
  );
};

export default Textarea;
