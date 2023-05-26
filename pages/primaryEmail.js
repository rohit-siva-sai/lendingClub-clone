import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

const PrimaryEmail = () => {
  const [
    updateIncreaseProgress,
    updateDecreaseProgress,
    updateUserEmail,
    userEmail,
  ] = useStore((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.updateUserEmail,
    store.userEmail,
  ]);
  const [email, setEmail] = useState(userEmail);
  const [accept, setAccept] = useState(false);

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
          What&#39;s your email?
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          You&#39;ll use this to receive details about your loan and create your
          account.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">Email</p>
          <div className="">
            <input
              type="email"
              placeholder="your@gmail.com"
              name="email"
              id=""
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                // updateLoan(loan);
              }}
              onBlur={() => {
                updateUserEmail(email);
              }}
              // onChange={handleChange}
              className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4"
            />
          </div>
        </div>

        <p className="text-start font-semibold w-[600px] text-lg pt-6 text-cyan-800 ">
          By checking this box, I represent and acknowledge that I have clicked
          on, read and agree to:
        </p>
        <div className="flex w-[600px]  space-x-4 items-start  pt-6">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-10 h-10  cursor-pointer border accent-sky-600"
            onClick={() => {
              setAccept(!accept);
            }}
          />
          <p className="text-lg ">
            The{" "}
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              ESIGN Act Consent
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Terms Of Use
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Application Terms and Conditions
            </Link>
            ,&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Privacy Policy
            </Link>
            &nbsp;and&nbsp;
            <Link
              href={""}
              className="font-bold hover:text-[#113b5e] text-cyan-700"
            >
              Credit Profile Authorization
            </Link>
            .
          </p>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/primaryAddress"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>
          <Link href={`${accept ? "/primaryPhone": ""} `} onClick={accept? updateIncreaseProgress: ""}  >
            <div  className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3" >
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimaryEmail;
