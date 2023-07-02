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
        /* 
        Contact, Comment 제외하고는 나 혼자만 사용하는 Input이 대부분이다. 
        react-hook-form 라이브러리(약 850KB) 설치하는 것은 투머치라고 생각해서 useRef 활용하여 작성  
        */
        ref={inputRef}
        type={type}
        className="w-full p-2 rounded-lg outline-none bg-custom-black ring-transition"
      />
    </>
  );
};

export default Input;
