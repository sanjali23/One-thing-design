import React, { useState, useEffect } from "react";
import networking from "../assets/networking.svg";
import offer from "../assets/image.svg";
import offer1 from "../assets/first.svg";
import { MdOutlineNavigateNext } from "react-icons/md";
import icon from "../assets/icon.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Rewards = () => {
  const images = [
    {
      id: 1,
      img: offer1,
      desc1: "Buy 1 Get 1",
      desc2: "Movie Tickets",
      icon: icon,
    },
    {
      id: 2,
      img: offer,
      desc1: "Buy 1 Get 1",
      desc2: "Movie Tickets",
      icon: icon,
    },
    {
      id: 3,
      img: offer1,
      desc1: "Buy 1 Get 1",
      desc2: "Movie Tickets",
      icon: icon,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState();

  var settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "130px",
    infinite: true,
    slidesToShow: 1,
    arrows: false,
    dots: false,
    afterChange: (current) => {
      setCurrentIndex(current);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "100px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "130px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="px-0 sm:px-0 py-1 sm:py-1 lg:px-0 md:px-0 lg:py-0 md:py-0">
      <div className="md:bg-peach lg:bg-peach sm:bg-white bg-white flex md:flex-row lg:flex-row sm:flex-col flex-col gap-2 p-8 px-12 ">
        <div className="lg:w-1/2 order-2 md:w-1/2 sm:w-full w-full  ">
          <Slider {...settings}>
            {images.map((image, i) => (
              <div
                key={i}
                className={` p-0 h-full relative border  ${
                  i === currentIndex
                    ? " lg:w-20 sm:w-20 w-20 md:w-36 p-0"
                    : "w-0"
                }`}
              >
                <div className="rounded-xl ">
                  <img
                    key={i}
                    src={image.img}
                    alt=""
                    className={`w-auto rounded-xl lg:h-96 md:h-80 sm:h-72 h-72 overflow-hidden object-cover mx-auto z-0 ${
                      i === currentIndex ? "scale-100" : "scale-75"
                    }`}
                  />

                  <div
                    className={
                      i === currentIndex
                        ? "text-white items-center flex gap-4 absolute  text-sm p-2   left-0 right-32 mx-auto w-fit bottom-0 z-20"
                        : "text-white items-center flex gap-4 absolute   text-xs md:p-14 lg:p-10  sm:p-10 p-10  left-0 right-16 mx-auto w-fit  bottom-4 z-20"
                    }
                  >
                    <img
                      className="lg:w-12 md:w-8 sm:w-8 w-8"
                      src={image.icon}
                    />
                    <div className="text-left">
                      <p className="whitespace-nowrap lg:flex sm:flex flex md:hidden">
                        {image.desc1}
                      </p>
                      <p className="whitespace-nowrap lg:flex sm:flex  flex md:hidden">
                        {image.desc2}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>

          {/* {images.map((image, index) => (
            <div
              key={index}
              className={`flex items-center transform transition ease-in-out duration-500 ${
                index === currentIndex ? "scale-125 translate-x-0" : "scale-100"
              }`}
            >
              <img
                src={image.img}
                alt={`Slide ${index}`}
                className={`${index === currentIndex ? "" : ""}`}
              />
            </div>
          ))} */}
        </div>
        <div className="md:w-1/2 lg:w-1/2 sm:w-full md:order-1 lg:order-1 w-full md:py-0 sm:py-5 py-5 sm:bg-white md:bg-peach lg:bg-peach bg-white lg:py-0 s flex justify-center items-center">
          <div className="md:w-3/4 lg:w-3/4 sm:w-11/12 w-11/12 flex flex-col gap-4 text-darkblack  text-left">
            <img
              height="50px"
              width="50px"
              className="lg:flex md:flex sm:hidden hidden"
              src={networking}
              alt=""
            />
            <p className="md:text-4xl  lg:text-4xl sm:text-2xl text-2xl  font-medium">
              Choose Your Rewards
            </p>
            <p className="text-xl text-gray-700 font-normal md:flex lg:flex sm:hidden hidden">
              Match your card to your lifestyle. We’ve got benefits from across
              brands & categories for you to choose from. Each benefit has an
              attached fee. Just add the ones you like to your card.
            </p>
            <p className="font-normal md:hidden lg:hidden sm:flex flex">
              Choose rewards from brands and categories that fit in with your
              personality. Your card’s annual fee will based on the rewards you
              select.
            </p>
            <button className="md:hidden lg:hidden sm:flex flex font-medium items-center text-black">
              <p className="underline">Get Started</p>
              <MdOutlineNavigateNext className="text-xl text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
