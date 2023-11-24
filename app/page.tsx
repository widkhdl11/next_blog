"use client";
import { NextPage } from "next";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import PostCard from "./components/PostCard";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

const quotes = [
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "A good programmer is someone who always looks both ways before crossing a one-way street.",
  "The best code is no code at all.",
  "Good code is its own best documentation.",
  "Every software has at least one bug, and every program has at least one user.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "If you don't think carefully, you might think that coding is just typing.",
  "The next best thing to having good ideas is recognizing good ideas from your users. Sometimes the latter is better.",
  "The computer was born to solve problems that did not exist before.",
  "First, solve the problem. Then, write the code.",
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
          <h2 className="mt-3 md:mt-6 font-semibold text-xs md:text-xl mx-3 md:mx-6 px-8 text-center">
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
