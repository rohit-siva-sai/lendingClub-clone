import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const PrimaryName = () => {
  const [
    updateIncreaseProgress,
    updateDecreaseProgress,
    updateUserName,
    username,
  ] = useStore((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.updateUserName,
    store.username,
  ]);
  const [name, setName] = useState(username);

  // const handleChange = ({ target }) => {
  //   setLoan((prev) => ({
  //     ...prev,
  //     [target.name]: target.value,
  //   }));
  //   updateLoan(loan)
  // };

  return (
    <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="">
        <p className="text-4xl font-bold text-[#113b5e]">
          What&#39;s your name?
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          This helps us verify your identity and create your customized offer.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">First Name</p>
          <div className="">
            
            <input
              type="text"
              name="firstName"
              id=""
              value={name.firstName}
              onChange={(e) => {
                setName((prev) => ({ ...prev, firstName: e.target.value }));
                // updateLoan(loan);
              }}
              onBlur={() => {
                updateUserName(name);
              }}
              // onChange={handleChange}
              className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4"
            />
          </div>
         
        </div>
        <div className="pt-6">
          <p className="font-semibold pb-1 text-lg ">Last Name</p>
          <div className="">
            <input
              name="lastName"
              id=""
              value={name.lastName}
              onChange={(e) => {
                setName((prev) => ({ ...prev, lastName: e.target.value }));
              }}
              onBlur={() => {
                updateUserName(name);
              }}
              // onChange={handleChange}
              className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
            />
          </div>
        </div>
        <div className="flex space-x-1  w-[600px]  items-center  pt-10">
          <picture>
            <img
              src="https://www.lendingclub.com/apply/assets/pi1-1QAAT/images/lock-icon-53827a5d3338fada09ecd706df7b7800.svg"
              alt=""
              className="w-12"
            />
          </picture>
          <p className="text-start text-cyan-800 ">
          We know that your information is personal, so we use bank-level encryption at all times.
          </p>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/loanAmount"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>
          <Link href={"/primaryAddress"} onClick={updateIncreaseProgress}>
            <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimaryName;
