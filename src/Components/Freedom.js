import React from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import Select from "react-select";
const Freedom = () => {
  const cities = [
    { value: "newyork", label: "New York" },
    { value: "losangeles", label: "Los Angeles" },
    { value: "dellas", label: "Dellas" },
    { value: "lasvegas", label: "Las Vegas" },
    { value: "paris", label: "Paris" },
    // Add more cities here
  ];
  const customStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "9999px", // Adjust the value for the desired roundness
      width: "250px", // Adjust the value for the desired roundness
    }),
  };
  return (
    <div className="bg-purple md:flex-row lg:flex-row sm:flex-col flex-col text-white flex w-full">
      <div className="md:w-1/2 lg:w-1/2 sm:w-full w-full md:px-0 md:pt-0 lg:pt-0 sm:pt-6 pt-6 lg:px-0 sm:px-6 px-6  flex md:justify-center  lg:justify-center lg:items-center md:items-center font-medium md:text-3xl lg:text-4xl sm:text-2xl text-2xl">
        <div className=" flex flex-col gap-2 md:p-4">
          <p className="text-left">The Freedom to Create</p>
          <p className="text-left">The Credit Card You Want</p>
        </div>
      </div>
      <div className="flex lg:px-10 lg:py-10 md:px-10 md:py-10 sm:px-6 px-6 justify-center items-center md:w-1/2 lg:w-1/2 sm:w-full w-full">
        <div className="flex-col md:flex lg:flex sm:hidden  gap-4 text-base font-normal text-left hidden">
          <p>
            That's why it comes with benefits & rewards chosen by you. Available
            in multiple designs, your card comes in a style selected by you. You
            can come back each year, to edit your benefits or update your style.
          </p>
          <p>
            Your OneSync Credit Card stays true to you, year after year. It’s
            the only card you’ll ever need.
          </p>
          <button className="animate-bounce hover:animate-none flex gap-2 font-medium items-center text-white text-xl">
            <p className=" underline">Get Started</p>
            <MdOutlineNavigateNext className="text-3xl text-white" />
          </button>
        </div>
        <div className="flex-col md:hidden py-6 lg:hidden sm:flex gap-4 text-base font-normal text-left flex">
          <p>
            Build your own Credit Card that fits in your day to day lifestyle.
            First, choose your rewards and then select your card design.
          </p>
          <p>Check if the card is available in your city</p>
          <div className="flex w-full  gap-2">
            <Select
              className="rounded-4xl"
              styles={customStyles}
              options={cities}
              placeholder="Select City"
            />
            <button className="bg-wine py-1 px-6 font-medium  rounded-3xl">
              Go
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freedom;
