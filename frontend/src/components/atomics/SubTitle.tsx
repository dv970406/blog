import React from "react";

interface ISubTitle {
  title: string;
}
const SubTitle = ({ title }: ISubTitle) => {
  return <h3 className="my-2 text-main">{title}</h3>;
};

export default SubTitle;
