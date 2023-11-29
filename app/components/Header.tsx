"use client";
import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Bar from "./Bar";

const Header: FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const [isTop, setIsTop] = useState(true);

  const onScrollTopCheck = () => {
    if (window.scrollY > 4) {
      setIsTop(false);
    } else {
      setIsTop(true);
    }
  };

  useEffect(() => {
    const watchScroll = () =>
      window.addEventListener("scroll", onScrollTopCheck);

    watchScroll();

    return () => {
      window.removeEventListener("scroll", onScrollTopCheck);
    };
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-20">
      <Bar />
      <div
        className={`md-container px-8 py-4 shadow-lg bg-gray-100 flex items-center justify-between ${
          !isTop && "rounded-b-xl"
        }`}
      >
        <h1 className="font-yjpg md:text-2xl text-lg text-d-navy hover:text-gray-700">
          <Link href="/">Jaewon &apos;s Blog</Link>
        </h1>
        <div>
          <Link
            href={"/profile"}
            className="hover:font-semibold underline hover:shadow-lg"
          >
            Profile
          </Link>
          <Link
            href={"/projects"}
            className="ml-4 hover:font-semibold underline hover:shadow-lg"
          >
            Projects
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
