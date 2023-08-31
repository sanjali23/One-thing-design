import React, { useEffect, useState } from "react";

const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const data = [
    {
      id: 1,
      label1: "Manage Your Card",
      label2: "Track Your Application",
      label3: "Contact Us",
    },
    {
      id: 2,
      label1: "Manage Your Card",
      label2: "Track Your Application",
      label3: "Contact Us",
    },
    {
      id: 3,
      label1: "Manage Your Card",
      label2: "Track Your Application",
      label3: "Contact Us",
    },
    {
      id: 4,
      label1: "Manage Your Card",
      label2: "Track Your Application",
      label3: "Contact Us",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Now you can use the screenWidth state to apply your conditions
  const isMobile = screenWidth < 768; // Example condition

  return (
    <div className="bg-darkblue text-white flex flex-col gap-2 px-2 py-10">
      <p className="font-medium text-3xl text-center">OneSync Credit Card</p>
      <p className="font-normal text-lg text-center">Experience Freedom</p>
      <div className="flex justify-center items-center py-8 px-4">
        <button className="bg-voilet py-2  transition ease-in-out delay-150 hover:bg-wine  hover:-translate-y-1 hover:scale-110 duration-300 px-8 rounded-3xl font-medium text-lg">
          Get Started
        </button>
      </div>
      <div className="flex py-4 justify-center items-center">
        <div className="border-t-2  w-11/12 border-grey"></div>
      </div>
      <div className="grid md:grid-cols-4 lg:grid-cols-4 md:px-16 lg:px-16 sm:px-6 px-6 md:pt-10 lg:pt-10  gap-5">
        {isMobile ? (
          <>
            {data.slice(0, 1).map((item) => (
              <div
                key={item.id}
                className="flex text-left flex-col gap-3 font-medium"
              >
                <p>{item.label1}</p>
                <p>{item.label2}</p>
                <p>{item.label3}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {data.map((item) => (
              <div
                key={item.id}
                className="flex text-left flex-col gap-3 font-medium"
              >
                <p>{item.label1}</p>
                <p>{item.label2}</p>
                <p>{item.label3}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Footer;
