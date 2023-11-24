"use client";

import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

const Profile: NextPage = () => {
  const [size, setSize] = useState<number>(6);

  const scrollEvent = () => {
    setSize(6 - window.scrollY * 0.05);
  };

  // 스크롤 내릴 때 왜 자꾸 유즈 이펙트가 실행이 됐는지
  // 유즈 이펙트 없이 리무브까지 구현했을시 똑같은지

  useEffect(() => {
    const watchScroll = () => window.addEventListener("scroll", scrollEvent);

    watchScroll();

    return () => window.removeEventListener("scroll", scrollEvent);
  }, []);

  return (
    <div className=" flex flex-col py-14 bg-gray-100">
      <div className="px-10">
        <div className="py-1 px-4 text-d-purple font-semibold text-2xl mb-1 mx-12 bg-gray-200">
          안녕하세요. 저는
        </div>
        <div className="py-1 text-center font-semibold text-2xl bg-gray-200">
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
        <div className="py-1 px-4 text-d-green  font-semibold text-2xl mb-8 mt-2 mx-12 text-right bg-gray-200">
          입니다.
        </div>
      </div>
      <div className="flex justify-center">
        <Image
          src="/images/profile02.jpg"
          alt="profile"
          width={140 * size > 140 ? 140 * size : 140}
          height={180 * size > 180 ? 180 * size : 180}
        ></Image>
      </div>
      <div className="flex flex-col justify-center border-4 border-double rounded-2xl border-gray-500  h-1/2 mx-[40px]">
        <div className="flex">
          <div className="w-1/2 flex justify-center h-[180px] mt-[50px]">
            <Image
              src="/images/profile.jpg"
              alt="profile"
              width={140}
              height={180}
            ></Image>
          </div>
          <div className="w-1/2 flex justify-star1 items-start pt-9 h-[180px] mt-[50px]">
            <ul>
              <li>
                <span>생년월일 : </span>
                <span>940417</span>
              </li>
              <li>
                <span>이름 : </span>
                <span>정재원</span>
              </li>
              <li>
                <span>경력 : </span>
                <span>국비교육(ICT인재 개발원), 웹비즈(백엔드)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-9 p-3">
          <h3 className="font-bold text-2xl">About Me.</h3>
          <ul className="list-disc ml-[36px] my-4">
            <li>안녕하세요. 신입 개발자 정재원입니다.</li>
            <li>
              백엔드를 제일 오래 공부하긴 했지만 프론트엔드와
              빅데이터,자동화시스템과 머신러닝 등 다양한 분야에 관심을 가지고
              있습니다.
            </li>
            <li>
              성실함과 집요함이 장점이고, 타인과의 의견 교류에 거부감이
              없습니다.
            </li>
            <li>
              항상 열정적으로 임하지는 못하지만 지속적으로 발전을 추구하는
              편입니다.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-5 px-9">
        <h2 className="text-[30px] mb-3">stack.</h2>
        <h3 className="items-start">*Front-End</h3>
        <ul className="list-disc ml-[36px]">
          <li>ReactJS</li>
          <li>nextJS</li>
          <li>Redux</li>
          <li>scss</li>
          <li>Javascript</li>
          <li>Typescript</li>
        </ul>
        <h3 className="items-start">*Back-End</h3>
        <ul className="list-disc ml-[36px]">
          <li>Spring Boot</li>
          <li>Java</li>
          <li>Jpa</li>
        </ul>
        <h3 className="items-start">*Database</h3>
        <ul className="list-disc ml-[36px]">
          <li>MySQL</li>
          <li>Redis</li>
        </ul>
      </div>

      <div className="mt-5 px-9">
        <span>https://jjaewonn.tistory.com</span>
      </div>
    </div>
  );
};

export default Profile;
