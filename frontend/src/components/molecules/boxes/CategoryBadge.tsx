import React from "react";

interface ICategoryBadge {
  categoryName: string;
}

const getProperColor = (categoryName: string) => {
  switch (categoryName) {
    case "React":
      return "bg-custom-blue";
    case "NextJS":
      return "bg-red-400";
  }
};

const CategoryBadge = ({ categoryName }: ICategoryBadge) => {
  return (
    <li className={`px-2 py-1 rounded-full ${getProperColor(categoryName)}`}>
      <span className="text-cute">{categoryName}</span>
    </li>
  );
};

export default CategoryBadge;
