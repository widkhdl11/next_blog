import { NextPage } from "next";
import Image from "next/image";

const Projects: NextPage = () => {
  return (
    <div className="flex flex-col px-10 py-14 font-yjpg bg-gray-100">
      <h2 className="self-center text-[40px] mx-6 my-9">재원&apos;s 프로필</h2>
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
        <h2 className="text-[30px]">Project.</h2>
        <ul>
          <li>
            <div className="my-5 flex flex-col">
              <div className="text-[24px]">1. 기능 중점의 블로그</div>
              <div>
                <h3 className="text-[20px]">개요</h3>
                <p>
                  국비 교육을 통해 팀원들과 팀프로젝트는 해보았지만 한번쯤은
                  혼자 만들어보며 다양한 부분에서 고민해 보고 싶다는 생각을
                  가지고 있었습니다. <br />
                  그러하여 실용적인 측면보다는 기능의 구현과 경험에 중점을 두어
                  대중적으로 사용하는 다양한 프레임워크들을 사용해보기 위한
                  블로그를 제작하게 되었습니다.
                  <br /> 아직은 미완성이지만 차차 업데이트를 해나갈 생각입니다.
                </p>
                <div className="text-[20px]">주요기술</div>
                <div>
                  <span>
                    Java, Spring Boot, JPA, React, Spring Security,H2, Redis
                  </span>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <h3 className="font-semibold mr-3">git -</h3>
                <span>https://github.com/widkhdl11/polog01</span>
              </div>
            </div>
          </li>
          <li>
            <div className="my-5 flex flex-col">
              <div className="text-[24px]">2. 기본 중점 블로그</div>
              <div>
                <h3 className="text-[20px]">개요</h3>
                <p>
                  처음 계획한 블로그를 제작 중 생각보다 많은 시간이 투자하게
                  되어 현실적인 부분을 생각하여, 기본적인 기능에 중점을 둔
                  블로그를 먼저 만들게 되었습니다.
                </p>
                <div className="text-[20px]">주요기술</div>
                <div>
                  <span>React, TailWind, Redux, NextJS</span>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <h3 className="font-semibold mr-3">git -</h3>
                <span>https://github.com/widkhdl11/next_blog</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="mt-5 px-9">
        <h2 className="text-[30px]">etc.</h2>
        <span>https://jjaewonn.tistory.com</span>
      </div>
    </div>
  );
};

export default Projects;
