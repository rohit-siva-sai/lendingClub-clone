import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
const Primarydob = () => {
  
 

  const [updateIncreaseProgress, updateDecreaseProgress, updateDob,dob,loan] = useStore(
    (store) => [
      store.updateIncreaseProgress,
      store.updateDecreaseProgress,
      store.updateDob,
      store.dob,
      store.loan
    ]
  );

  const [date, setDate] = useState(dob);

  
  

  return (
    <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="" >
        <p className="text-4xl font-bold text-[#113b5e]">
          When&#39;s your birthday?
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          Sharing your birthday helps us verify your identity and create your
          offer.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">Date of Birth</p>
          <div>
            <input
              type="date"
              name=""
              id=""
              value={date}
              onChange={(e) => {
                setDate(e.target.value)
                updateDob(e.target.value);
              }}
              className=" w-full py-2  outline-none border-2 rounded border-cyan-700 px-4 text-xl"
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
            We&#39;re serious about security, so we encrypt every page of our
            website with Secure Socket Layer (SSL) to protect your data.
          </p>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/loanType"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>
          <Link href={"/primaryIncome"} onClick={updateIncreaseProgress}>
            <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Primarydob;
