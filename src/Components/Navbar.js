import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Get Started");
  const [menu, setMenu] = useState(false);
  const tabs = ["Track Application", "Manage My Card", "FAQs", "Get Started"];
  return (
    <div className="flex bg-transparent justify-center">
      <div className="md:flex lg:flex sm:hidden hidden w-11/12 justify-between items-center py-4">
        <button className="text-white bg-black px-5 py-1 font-semibold">
          AFC Inc.
        </button>
        <div className="flex font-medium py-2">
          {tabs.map((item) => (
            <button
              onClick={() => setSelectedTab(item)}
              onMouseOver={() => setSelectedTab(item)}
              key={item}
              className={
                selectedTab === item
                  ? "bg-salmon px-4 py-2 mx-3 text-white rounded-md"
                  : "text-textColor mx-5 text-base hover:rounded-md hover:bg-salmon hover:mx-3 hover:px-4 hover:py-2 hover:text-white"
              }
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-11/12 py-4 items-center md:hidden lg:hidden sm:flex flex justify-between">
        <button className="text-white bg-black ml-3 px-3 py-1 font-semibold">
          AFC Inc.
        </button>
        <p
          onClick={() => (menu ? setMenu(false) : setMenu(true))}
          className="text-3xl"
        >
          <FiMenu />
        </p>
        {menu && (
          <div className="font-normal bg-lavender flex flex-col top-16 shadow-2xl text-left px-2 py-4 rounded-md right-1 z-50 absolute">
            {tabs.map((item) => (
              <div key={item} className="py-1">
                <p className="hover:bg-salmon hover:p-1 hover:text-white hover:rounded-md">
                  {item}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
