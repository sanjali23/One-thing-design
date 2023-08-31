import React, { useState } from "react";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
const Faqs = () => {
  const [active, setActive] = useState();
  const data = [
    {
      id: 1,
      question: "Who’s eligible for the Card?",
      answer:
        "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
    },
    {
      id: 2,
      question: "Is my location serviceable?",
      answer:
        "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
    },
    {
      id: 3,
      question: "What if I don’t want to pay at all?",
      answer:
        "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
    },
    {
      id: 4,
      question: "What happens after I’ve build my card?",
      answer:
        "If you’re between 23-60 years of age, have a monthly income of ₹25,000 or more, and have never defaulted on a credit card or loan payment, we’d encourage you to apply. However, your application will be declined if your location isn’t serviceable or if your credit score is low.",
    },
  ];
  return (
    <div>
      <p className="md:text-center lg:text-center lg:px-0 md:px-0 sm:px-6 px-6 pt-4 sm:text-left text-left lg:text-3xl md:text-3xl sm:text-2xl text-2xl font-medium">
        FAQs
      </p>
      <div className="px-2 md:py-14 lg:py-14 sm:py-4 py-4 flex flex-col gap-6 justify-center items-center">
        <div className="md:w-3/4 lg:w-1/2 sm:w-11/12 w-11/12 flex flex-col gap-4">
          {data.map((item, index) => (
            <div
              onClick={() =>
                active === index ? setActive() : setActive(index)
              }
              key={item.id}
              className="cursor-pointer border-b-2 py-2 flex flex-col gap-2"
            >
              <div className="flex justify-between md:text-xl lg:text-xl sm:text-sm text-sm font-medium text-salmon">
                <p className="">{item.question}</p>
                {active === index ? (
                  <BsChevronUp
                    onClick={() =>
                      active === index ? setActive() : setActive(index)
                    }
                  />
                ) : (
                  <BsChevronDown
                    onClick={() =>
                      active === index ? setActive() : setActive(index)
                    }
                  />
                )}
              </div>
              {index === active ? (
                <p className="text-gray-700 md:text-base lg:text-base sm:text-sm text-sm text-left">
                  {item.answer}
                </p>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
