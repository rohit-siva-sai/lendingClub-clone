import React, { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const array = [{ text1: "" }];

const Dropdown = () => {
  const [toggleDrop, setToggleDrop] = useState(false);
  return (
    <div>
      <div
        className={`${
          toggleDrop ? "h-[440px]  justify-start " : "h-16   overflow-hidden"
        } transition-all duration-500 pt-5 border-l-4 w-[500px]  px-4 mx-auto  flex flex-col  shadow-md border-cyan-600 bg-gray-50`}
      >
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => {
            setToggleDrop(!toggleDrop);
          }}
        >
          <p className="font-bold text-[#113b5e] ">
            What can I include as total annual income?
          </p>
          <MdOutlineKeyboardArrowUp
            size={25}
            className={` text-[#113b5e]  transition-all duration-300 ${
              toggleDrop ? "rotate-180" : "rotate-0"
            } `}
          />
        </div>
        {toggleDrop && (
          <div className="w-[450px]">
            <p className="text-[#113b5ebc] font-medium py-3">Some examples of income include the following:</p>
            <div className="flex flex-col space-y-4">
              <div className="flex  items-start  space-x-3">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/green-circle-check-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    className=" self-baseline mt-[5px]"
                    width={33}
                  />
                </picture>
                <p className="text-[#113b5ebc] font-medium ">
                  <span className="font-bold text-[#113b5e]  self-baseline ">
                    Income from employment,
                  </span>
                  &nbsp;including full-time, part-time, freelance, or seasonal
                  jobs
                </p>
              </div>
              <div className="flex items-start  space-x-3">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/green-circle-check-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    className=" self-baseline mt-[5px]"
                    width={28}
                  />
                </picture>
                <p className="text-[#113b5ebc] font-medium ">
                  <span className="font-bold text-[#113b5e]  self-baseline ">
                    Self-employment,
                  </span>
                  &nbsp;including any business dividends or rental income
                </p>
              </div>
              <div className="flex w-11/12 items-start  space-x-3">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/green-circle-check-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    className=" self-baseline mt-[5px]"
                    width={25}
                  />
                </picture>
                <p className="text-[#113b5ebc] font-medium ">
                  <span className="font-bold text-[#113b5e]  self-baseline ">
                    Non-taxable income,
                  </span>
                  &nbsp;if included, should be increased by 25%.
                </p>
              </div>
              <div className="flex  items-start  space-x-3">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/green-circle-check-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    className=" self-baseline mt-[5px]"
                    width={40}
                  />
                </picture>
                <p className="text-[#113b5ebc] font-medium ">
                  <span className="font-bold text-[#113b5e]  self-baseline ">
                    Any other income
                  </span>
                  &nbsp;such as retirement, social security, public assistance,
                  or any non-taxable income
                </p>
              </div>
            </div>
            <p className="text-[#113b5ebc] font-medium pt-3 pb-4 px-3">Only include alimony, child support, or separate maintenance if you wish for us to consider it as a source of loan repayment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
