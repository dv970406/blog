import Image from "next/image";
import React from "react";

const NoDataNotification = () => {
  return (
    <div className="flex items-center justify-center gap-4 mt-12 ">
      <p className="text-sub text-custom-blue">
        존재하는 <span className="text-custom-lightgray">게시글</span>이
        없습니다.
      </p>
    </div>
  );
};

export default NoDataNotification;
