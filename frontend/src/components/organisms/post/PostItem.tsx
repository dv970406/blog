import CategoryBadge from "@/components/molecules/boxes/CategoryBadge";
import { ICategory } from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IPostItem {
  id: string;
  title: string;
  categories: ICategory[];
}
const PostItem = ({ id: postId, title, categories }: IPostItem) => {
  return (
    <li>
      <Link href={`/post/${postId}`} className="flex flex-col gap-2 group">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={"/thumbnails/intern-project.gif"}
            width={600}
            height={500}
            alt={title}
            className="duration-300 group-hover:scale-110"
          />
        </div>

        <h2 className="overflow-hidden text-subtitle text-ellipsis">{title}</h2>
        <ul className="flex gap-2 ">
          {categories?.map(({ id, categoryName }) => (
            <CategoryBadge key={id} categoryName={categoryName} />
          ))}
        </ul>
      </Link>
    </li>
  );
};

export default PostItem;
