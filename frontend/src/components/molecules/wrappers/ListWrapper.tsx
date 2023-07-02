import React from "react";

interface IListWrapper {
  children: React.ReactNode;
}
const ListWrapper = ({ children }: IListWrapper) => {
  return <ul className="flex flex-col gap-32 mt-10">{children}</ul>;
};

export default ListWrapper;
