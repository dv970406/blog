import { postsFiltererState } from "@/recoil/posts-filterer";
import { ChangeEventHandler, MouseEventHandler, useTransition } from "react";
import { useRecoilState } from "recoil";

export const usePostsFilterer = () => {
  const [postsFilterer, setPostsFilterer] = useRecoilState(postsFiltererState);
  const [isPending, startTransition] = useTransition();

  const handleChangeTitle: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (isPending) return;

    const { value } = event.currentTarget;
    startTransition(() => {
      setPostsFilterer((prev) => ({ ...prev, keyword: value }));
    });
  };

  const handleChangeCategory: MouseEventHandler<HTMLLIElement> = (event) => {
    const targetCategoryName = event?.currentTarget.textContent || "";
    setPostsFilterer((prev) => {
      const copiedPrev = { ...prev };
      const copiedPrevCategoriesName = [...prev.categoriesName];

      const findTargetIndex = copiedPrevCategoriesName.findIndex(
        (target) => target === targetCategoryName
      );
      if (findTargetIndex !== -1) {
        copiedPrevCategoriesName.splice(findTargetIndex, 1);

        return {
          ...copiedPrev,
          categoriesName: copiedPrevCategoriesName,
        };
      }

      return {
        ...copiedPrev,
        categoriesName: [...copiedPrevCategoriesName, targetCategoryName],
      };
    });
  };

  return { postsFilterer, handleChangeTitle, handleChangeCategory };
};
