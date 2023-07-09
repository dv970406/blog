import { IGetAllPostsInput } from "@/types/post";
import { customAxios } from "../axios";

export const getAllPosts = async ({
  keyword = "",
  categoriesName = [],
  pageParam = 1,
}: IGetAllPostsInput) => {
  // categoriesName[]=React&categoriesName[]=NextJS 이런 포맷으로 변환
  const categoriesNameForQueryParameters =
    categoriesName.length > 0
      ? categoriesName
          .map((categoryName) => `categoriesName[]=${categoryName}`)
          .join("&")
      : `categoriesName=${""}`;

  const { data } = await customAxios.get(
    `/post?keyword=${keyword}&${categoriesNameForQueryParameters}&pageParam=${pageParam}`
  );

  return data;
};
