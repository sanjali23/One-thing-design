import React from "react";
import card from "../assets/card.svg";
const Hero = () => {
  return (
    <div className="flex md:flex-row lg:flex-row sm:flex-col flex-col items-center gap-4 w-full lg:p-7 md:p-7 sm:p-3 p-3">
      <div className="md:w-1/2 lg:w-1/2 sm:w-full w-full justify-center items-center">
        <div className="flex flex-col gap-5 py-2 px-5 ">
          <div className="flex flex-col gap-2">
            <p className="font-medium lg:text-4xl md:text-4xl sm:text-3xl text-3xl lg:text-left md:text-left sm:text-center text-center">
              Build a Credit Card
            </p>
            <p className="font-medium  lg:text-4xl md:text-4xl sm:text-3xl text-3xl lg:text-left md:text-left sm:text-center text-center">
              That is Definitely Yours
            </p>
          </div>
          <p className="font-normal text-xl text-gray-700 lg:text-left md:text-left sm:text-center text-center">
            With the OneSync Credit Card you can customise your card the way you
            want
          </p>
          <div className="flex md:justify-start lg:justify-start sm:justify-center justify-center">
            <button className=" transition ease-in-out delay-150 hover:bg-wine  hover:-translate-y-1 hover:scale-110 duration-300 bg-salmon font-medium text-lg md:px-8 lg:px-14 sm:px-10 px-10 py-2 rounded-3xl text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="flex md:w-1/2 lg:w-1/2 sm:w-full w-full">
        <img
          src={card}
          className=" transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
