import React from "react";

interface IGridWrapper {
  children: React.ReactNode;
}
const GridWrapper = ({ children }: IGridWrapper) => {
  return <ul className="grid grid-cols-3 gap-4 mt-10">{children}</ul>;
};

export default GridWrapper;
