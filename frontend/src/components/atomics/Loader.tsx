import React from "react";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className={`flex justify-center items-center`}>
      <ClipLoader color={"white"} size={32} />
    </div>
  );
};

export default Loader;
