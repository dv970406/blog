import Image from "next/image";
import React, { InputHTMLAttributes } from "react";

interface IInputWithFilterer extends InputHTMLAttributes<HTMLInputElement> {
  isSearchInput?: boolean;
}
const InputWithFilterer = ({
  isSearchInput = false,
  ...props
}: IInputWithFilterer) => {
  return (
    <div
      className={`w-full px-3 py-2 rounded-lg outline-none bg-custom-darkgray ring-transition ${
        isSearchInput && "flex gap-4"
      }`}
    >
      {isSearchInput && (
        <Image src={"/search.svg"} width={20} height={15} alt="search" />
      )}
      <input {...props} className="w-full bg-transparent outline-none" />
    </div>
  );
};

export default InputWithFilterer;
