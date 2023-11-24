"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import MySkillCard from "../components/MySkillCard";
import mySkillDataFront from "./mySkillDataFront.json";
import mySkillDataBack from "./mySkillDataBack.json";
import Link from "next/link";

const profileWidth = 280;
const profileHeight = 360;

const Profile: NextPage = () => {
  const [size, setSize] = useState<number>(6);

  const scrollEvent = () => {
    setSize(6 - window.scrollY * 0.025);
  };

  // 스크롤 내릴 때 왜 자꾸 유즈 이펙트가 실행이 됐는지
  // 유즈 이펙트 없이 리무브까지 구현했을시 똑같은지

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className=" flex flex-col py-14 bg-gray-100 text-gray-700">
      <div className="px-10 text-lg md:text-2xl">
        <div className="py-1 px-4 text-d-purple font-semibold mb-2 md:mx-12 mx-8 bg-gray-200">
          안녕하세요. 저는
        </div>
        <div className="py-1 text-center font-semibold bg-gray-200">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "혁신적인 솔루션을 창출하는 열정 넘치는 개발자",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "팀원과의 원활한 협업으로 가치를 더하는 열심히 일하는 전문가",
              1000,
              "불굴의 의지로 문제를 해결하는 높은 책임감의 개발자",
              1000,
              "빠르게 변화하는 기술에 뒤처지지 않는 최신 트렌드 적용 전문가",
              1000,
            ]}
            wrapper="span"
            speed={50}
            //style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
        <div className="py-1 px-4 text-d-green font-semibold mb-8 mt-2 text-right bg-gray-200 md:mx-12 mx-8">
          입니다.
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        {size > 1 && (
          <div
            style={{
              width:
                profileWidth * size > profileWidth
                  ? profileWidth * size
                  : profileWidth,
            }}
            className="max-w-screen-md h-4 bg-gradient-to-r from-d-green to-d-purple "
          ></div>
        )}
        <Image
          className={size <= 1 ? "rounded-3xl" : ""}
          src="/images/profile02.jpg"
          alt="profile"
          width={
            profileWidth * size > profileWidth
              ? profileWidth * size
              : profileWidth
          }
          height={
            profileHeight * size > profileHeight
              ? profileHeight * size
              : profileHeight
          }
        ></Image>
      </div>
      <div className="flex flex-col items-center mt-8">
        <h1 className="font-semibold text-2xl">About Me.</h1>
        <h3 className="mt-4 text-xl font-medium md:text-4xl">
          안녕하세요! 웹 개발자{" "}
          <span className="font-bold text-black">정재원</span>
          입니다.
        </h3>
        <p className="mt-4 px-8">
          국비 교육(ICT인재 개발원)에서 웹 개발에 대한 풍부한 지식을 쌓았습니다.
          웹비즈(백엔드)에서의 경험을 토대로 백엔드에 대한 깊은 이해를
          갖추었지만, 더 나아가{" "}
          <span className="font-bold text-black">프론트엔드</span>,{" "}
          <span className="font-bold text-black">빅데이터</span>,{" "}
          <span className="font-bold text-black">자동화 시스템</span>, 그리고{" "}
          <span className="font-bold text-black">머신러닝</span> 분야에 끊임없는
          탐구와 관심을 가지고 있습니다.
        </p>
        <p className="mt-4 px-8">
          성실함과 집요함은 제 강점이며, 다른 이들과 소통하고 의견을 교환하는
          것에 거부감이 없습니다. 항상 지속적인 발전을 추구하며, 다양한
          분야에서의 도전을 즐기고 있습니다. 함께 일하며 더 나은 개발자로
          성장하기 위해 열정을 가지고 노력하고 있습니다.
        </p>
      </div>
      <div className="px-8 mt-12">
        <h1 className="text-3xl font-semibold">My Skill</h1>
        <div className="mt-6">
          <h3 className="text-2xl font-bold">Front-end</h3>
          <ul className="mt-2 text-xl flex flex-wrap">
            {mySkillDataFront.map((v, i) => {
              return <MySkillCard key={i} name={v.name} skill={v.skill} />;
            })}
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="text-2xl font-bold">Back-end</h3>
          <ul className="mt-2 text-xl flex flex-wrap">
            {mySkillDataBack.map((v, i) => {
              return <MySkillCard key={i} name={v.name} skill={v.skill} />;
            })}
          </ul>
        </div>
      </div>

      <div className="mt-12 px-8">
        <h1 className="font-semibold text-2xl">My Blog</h1>
        <Link
          className="text-blue-600 hover:text-blue-800 underline"
          href="https://jjaewonn.tistory.com"
          target="_blank"
        >
          <span>https://jjaewonn.tistory.com</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
