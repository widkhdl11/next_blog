"use client";
import { NextPage } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./components/PostCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const quotes = [
  "The Future depends on what you do today 1",
  "The Future depends on what you do today 2",
  "The Future depends on what you do today 3",
  "The Future depends on what you do today 4",
  "The Future depends on what you do today 5",
];

const Home: NextPage = () => {
  const [quote, setQuote] = useState<string>("");

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  useEffect(() => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
  }, []);

  return (
    <>
      <div className="bg-gray-300 h-60 md:h-96 flex flex-col justify-center items-center">
        <div className="w-24 h-24 md:w-48 md:h-48 relative">
          <Image
            className="absolute rounded-2xl"
            src="/images/dog.png"
            alt="dog"
            fill
          />
        </div>
        <h2 className="mt-3 md:mt-6 font-semibold text-xs md:text-xl">
          {quote}
        </h2>
        <Link
          className="mt-3 md:mt-6 btn-green text-xl md:text-xl"
          href="/profile"
        >
          My Profile
        </Link>
      </div>
      <ul className="pb-12 ">
        {posts.map((v, i) => {
          return <PostCard key={i} post={v} index={i} />;
        })}
      </ul>
    </>
  );
};

export default Home;
