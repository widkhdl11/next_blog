"use client";

import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { projectData } from "./projectData";

const Projects: NextPage = () => {
  const sliderRef = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const clickPage = (clickPage: number) => {
    setCurrentPage(clickPage);
    sliderRef.current.slickGoTo(clickPage);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage(sliderRef.current.innerSlider.state.currentSlide);
    }, 500);

    return () => clearInterval(timer);
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
  };
  return (
    <div className="flex flex-col  bg-gray-100">
      <ul className=" w-full">
        <Slider ref={sliderRef} {...settings}>
          {projectData.map((v, i) => (
            <li key={i} className=" w-full relative h-[400px]">
              <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
                <span className="font-bold md:text-5xl text-2xl text-white py-2 px-4 bg-black bg-opacity-70">
                  {v.name}
                </span>
              </div>
              <img
                className="w-full h-full object-cover"
                src={`/images/${v.image}`}
                alt={`${v.image}`}
              ></img>
            </li>
          ))}
        </Slider>
      </ul>
      <ul className="flex justify-center mt-2 gap-4">
        <li>
          <button
            className={` w-6 h-6 rounded-full flex justify-center items-center ${
              currentPage === 0
                ? "bg-gradient-to-tr from-d-purple to-d-green"
                : "bg-gray-400"
            }`}
            onClick={() => clickPage(0)}
          >
            {currentPage === 0 && (
              <div className="w-3 h-3 bg-white rounded-full"></div>
            )}
          </button>
        </li>
        <li>
          <button
            className={` w-6 h-6 rounded-full flex justify-center items-center ${
              currentPage === 1
                ? "bg-gradient-to-tr from-d-purple to-d-green"
                : "bg-gray-400"
            }`}
            onClick={() => clickPage(1)}
          >
            {currentPage === 1 && (
              <div className="w-3 h-3 bg-white rounded-full"></div>
            )}
          </button>
        </li>
      </ul>
      <div className="mx-10 mt-4 my-8">{projectData[currentPage].comp}</div>
    </div>
  );
};

export default Projects;
