"use client";

import { FC, useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

const BANNER = "banner";

const Banner: FC = () => {
  const [isClose, setIsClose] = useState(true);
  const onClickClose = () => {
    setIsClose(true);

    localStorage.setItem(BANNER, "true");
  };

  useEffect(() => {
    if (localStorage.getItem(BANNER) !== "true") {
      setIsClose(false);
    }
  }, []);

  return (
    <div
      className={`md-container px-8 py-1 bg-gradient-to-r from-d-green to-d-purple flex items-center justify-between bg-red-100 ${
        isClose && "hidden"
      }`}
    >
      <div className="text-xs">
        이 페이지는 NextJS를 사용하여 제작하였습니다.
      </div>
      <button onClick={onClickClose}>
        <IoIosClose size={20} />
      </button>
    </div>
  );
};

export default Banner;
