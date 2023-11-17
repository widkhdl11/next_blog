import { FC } from "react";
import { SiTistory } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="md-container px-8 py-2 shadow-lg bg-gray-800 text-gray-100 flex items-center gap-2">
      <span>Copyright © 2023 jaewon All rights reserved.</span>
      <Link href="https://github.com/widkhdl11" target="_blank">
        <SiGithub />
      </Link>
      <Link href="https://jjaewonn.tistory.com" target="_blank">
        <SiTistory />
      </Link>
    </footer>
  );
};

export default Footer;
