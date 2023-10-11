import { FC } from "react";
import Link from "next/link";

const Footer: FC = () => {
  return (
    <footer className="md-container px-2 py-4 shadow-lg">
      <h1 className="font-yjpg md:text-2xl text-lg text-d-navy hover:text-gray-700">
        <Link href="/">Jaewon &apos;s Blog</Link>
      </h1>
    </footer>
  );
};

export default Footer;
