import React, { InputHTMLAttributes } from "react";

interface ICategoryBadge extends InputHTMLAttributes<HTMLLIElement> {
  categoryName: string;
  isFilterer?: boolean;
  isClicked?: boolean;
}

const getProperColor = (categoryName: string) => {
  switch (categoryName) {
    case "React":
      return "bg-custom-blue";
    case "NextJS":
      return "bg-red-400";
  }
};

const CategoryBadge = ({
  categoryName,
  isFilterer = false,
  isClicked = false,
  ...props
}: ICategoryBadge) => {
  return (
    <li
      {...props}
      className={`${
        isFilterer && "cursor-pointer "
      } px-2 py-1 rounded-full text-cute transition-opacity ${
        !isFilterer || isClicked ? "opacity-100" : "opacity-75"
      } ${getProperColor(categoryName)}`}
    >
      {categoryName}
    </li>
  );
};

export default CategoryBadge;
