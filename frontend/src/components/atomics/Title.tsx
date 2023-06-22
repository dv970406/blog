import React from "react";

interface ITitle {
  title: string;
}
const Title = ({ title }: ITitle) => {
  return <h1 className="tracking-widest text-title">{title}</h1>;
};

export default Title;
