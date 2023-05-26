import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const PrimaryAddress = () => {
  const [
    updateIncreaseProgress,
    updateDecreaseProgress,
    updateAddress,
    username,
    userAddress,
  ] = useStore((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.updateAddress,
    store.username,
    store.userAddress,
  ]);
  const [address, setAddress] = useState(userAddress);

  // const handleChange = ({ target }) => {
  //   setLoan((prev) => ({
  //     ...prev,
  //     [target.name]: target.value,
  //   }));
  //   updateLoan(loan)
  // };

  return (
    <div className="absolute top-[55%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="">
        <p className="text-4xl font-bold text-[#113b5e]">
          What&#39;s your home address?
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          Let&#39;s make sure we found the right {username.firstName}.
        </p>
        <div>
          <div>
            <p className="font-semibold pb-1 text-lg ">Street Address</p>
            <div className="">
              <input
                type="text"
                name="firstName"
                id=""
                value={address.street}
                onChange={(e) => {
                  setAddress((prev) => ({ ...prev, street: e.target.value }));
                  // updateLoan(loan);
                }}
                onBlur={() => {
                  updateAddress(address);
                }}
                // onChange={handleChange}
                className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4"
              />
            </div>
            <p className="text-gray-500">
              Enter a residential Address (no P.O. boxes or commercial
              addresses)
            </p>
          </div>
          <div className="pt-6">
            <p className="font-semibold pb-1 text-lg ">City</p>
            <div className="">
              <input
              type="text"
                name="lastName"
                id=""
                value={address.city}
                onChange={(e) => {
                  setAddress((prev) => ({ ...prev, city: e.target.value }));
                }}
                onBlur={() => {
                  updateAddress(address);
                }}
                // onChange={handleChange}
                className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
              />
            </div>
          </div>
          <div className="flex space-x-8 pt-6">
            <div className="">
              <p className="font-semibold pb-1 text-lg ">State</p>
              <div className="">
                <input
                type="text"
                  name="lastName"
                  id=""
                  value={address.state}
                  onChange={(e) => {
                    setAddress((prev) => ({ ...prev, state: e.target.value }));
                  }}
                  onBlur={() => {
                    updateAddress(address);
                  }}
                  className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
                />
              </div>
            </div>
            <div className="">
              <p className="font-semibold pb-1 text-lg ">Zip</p>
              <div className="">
                <input
                type="number"
                  name="lastName"
                  id=""
                  value={address.zip}
                  onChange={(e) => {
                    setAddress((prev) => ({ ...prev, zip: e.target.value }));
                  }}
                  onBlur={() => {
                    updateAddress(address);
                  }}
                  className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/primaryName"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>
          <Link href={"/primaryEmail"} onClick={updateIncreaseProgress}>
            <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimaryAddress;
