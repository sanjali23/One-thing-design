import React from "react";
import insaurance from "../assets/insurance.svg";
import animation from "../assets/animation.svg";
import { GrNext } from "react-icons/gr";
const Form = () => {
  return (
    <div>
      <div className="lg:flex md:flex sm:hidden hidden gap-2 w-full">
        <div className="flex w-1/2 gap-5 justify-center items-center lg:py-10 md:py-2 px-16 flex-col bg-skyblue">
          <div className="lg:w-1/2 md:w-11/12 flex flex-col gap-9">
            <input
              type="text"
              className=" transition ease-in-out delay-150 hover:bg-wine  hover:-translate-y-1 hover:scale-110 duration-300 p-1.5 shadow-xl rounded-md opacity-100 outline-none focus:ring-0 focus:outline-none"
              placeholder="Enter your phone number"
            />
            <input
              type="text"
              className=" transition ease-in-out delay-150 hover:bg-wine  hover:-translate-y-1 hover:scale-110 duration-300 p-1.5 shadow-xl rounded-md opacity-80 outline-none focus:ring-0 focus:outline-none"
              placeholder="Enter your PAN number"
            />
            <input
              type="text"
              className=" transition ease-in-out delay-150 hover:bg-wine  hover:-translate-y-1 hover:scale-110 duration-300 p-1.5 shadow-xl rounded-md opacity-60 outline-none focus:ring-0 focus:outline-none"
              placeholder="Enter your Address"
            />
          </div>
        </div>
        <div className="flex w-1/2 flex-col">
          <div className="flex flex-col w-3/4 gap-4 text-darkblack text-start px-12 lg:py-16 md:py-8 ">
            <img src={insaurance} height="50px" width="50px" alt="" />
            <p className="font-medium text-4xl">Fill Eligibility Form</p>
            <p className="font-normal text-gray-700 text-xl">
              Tell us about yourself, to find out if you’re eligible to apply.
            </p>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden flex-col gap-4 px-5 py-8 sm:flex flex">
        <p className="font-medium text-gray-700 text-xl text-left">
          Create your own credit card in three easy steps
        </p>
        <img src={animation} alt="" />
        <p className="font-medium text-2xl text-left">Fill Eligibility Form</p>
        <p className="text-left font-normal">
          Please fill an application form to make sure you’re eligible for the
          card. You can fill this later as well{" "}
        </p>

        <button className="flex font-medium gap-2 items-center">
          <p className="underline">Get Started</p>
          <GrNext className="text-black" />
        </button>
      </div>
    </div>
  );
};

export default Form;
