import React from "react";
import gray from "../assets/gray.svg";
import paint from "../assets/paint.svg";
import card1 from "../assets/gray.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";
import card4 from "../assets/card4.svg";
import { MdOutlineNavigateNext } from "react-icons/md";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Style = () => {
  return (
    <div className="w-full">
      <div className="p-3 sm:p-3 lg:p-0 md:p-0">
        <div className="md:bg-lavender lg:bg-lavender sm:bg-white bg-white flex md:flex-row lg:flex-row sm:flex-col flex-col items-center md:py-10 md:px-5 lg:px-5 lg:py-10 sm:py-3 sm:px-2 py-3 px-2 gap-2 w-full">
          <div className="bg-lavender md:w-1/2 lg:w-1/2 sm:w-full w-full p-4 flex-col gap-10 justify-center items-center flex">
            <div className="lg:w-3/4 md:w-11/12 sm:w-11/12 w-11/12">
              <Carousel
                autoPlay={true}
                interval={2000}
                infiniteLoop={true}
                showArrows={false}
                showIndicators={false}
                showStatus={false}
              >
                <div>
                  <img src={card1} />
                </div>
                <div>
                  <img src={card2} />
                </div>
                <div>
                  <img src={card3} />
                </div>
                <div>
                  <img src={card4} />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="lg:bg-lavender md:bg-lavender sm:bg-white bg-white md:w-1/2 lg:w-1/2 sm:w-full w-full flex flex-col gap-4 justify-center items-center">
            <div className="md:py-0 lg:py-0 sm:py-4 py-4 md:w-3/4 lg:w-3/4 sm:w-11/12 w-11/12 flex flex-col md:gap-4 lg:gap-4 sm:gap-2 gap-2 text-darkblack  text-left">
              <img
                height="50px"
                width="50px"
                className="lg:flex md:flex sm:hidden hidden"
                src={paint}
                alt=""
              />
              <p className="lg:text-4xl md:text-4xl sm:text-lg text-lg font-medium">
                Select Your Style
              </p>
              <p className="md:flex lg:flex sm:hidden text-gray-700 hidden text-xl font-normal">
                Match your card to your personality. Whether you like a minimal
                look or something that catches everyone’s eyes, we’ve got a
                style for you. You can update your style every year, for a small
                fee
              </p>
              <p className="md:hidden lg:hidden text-gray-700 text-xl sm:flex flex font-normal">
                Whether you like a minimal look or something that catches
                everyone’s eyes. We have a Card design for you
              </p>
              <button className="md:hidden lg:hidden sm:flex flex font-medium items-center text-black">
                <p className="underline">Get Started</p>
                <MdOutlineNavigateNext className="text-xl text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col gap-3 md:hidden text-left lg:hidden sm:flex flex text-white bg-voilet py-4 px-4">
        <p className="text-2xl">
          Why the OneSync Card is the Best Choice for you?
        </p>
        <p className="text-lg">
          You can create a Credit Card that fits all your needs on your own.
          Gone are the days when you had choose from premade credit cards with
          features that you did not need.{" "}
        </p>
        <p className="text-lg">
          With the OneSync card you can save on all the things that you love to
          do with a unique personal touch
        </p>
        <button className="font-medium flex gap-1 items-center text-white">
          <p className="underline">Get Started</p>
          <MdOutlineNavigateNext className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
};

export default Style;
