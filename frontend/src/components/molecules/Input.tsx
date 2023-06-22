import SubTitle from "@/components/atomics/SubTitle";
import React, { InputHTMLAttributes, LegacyRef } from "react";

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  inputRef: LegacyRef<HTMLInputElement>;
  title: string;
}
const Input = ({ inputRef, type, title }: IInput) => {
  return (
    <>
      <SubTitle title={title} />
      <input
        ref={inputRef}
        type={type}
        className="w-full p-2 rounded-lg outline-none bg-custom-black ring-transition"
      />
    </>
  );
};

export default Input;
