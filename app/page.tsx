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
      <div className=" relative bg-gray-300 h-60 md:h-96">
        <div className="absolute z-10 flex flex-col justify-center items-center w-full h-full">
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
            className="mt-3 md:mt-6 font-semibold px-4 py-2 rounded-full bg-white bg-opacity-10 border-2 border-black text-black hover:bg-opacity-30 text-xl md:text-xl"
            href="/profile"
          >
            My Profile
          </Link>
        </div>
        <video
          className="absolute w-full h-full object-cover top-0 left-0 "
          src="/images/video.mp4"
          autoPlay
          muted
          loop
        ></video>
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
