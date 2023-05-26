import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";
import Dropdown from "@/components/incomePage/dropdown";

const PrimaryIncome = () => {
  const [updateIncreaseProgress, updateDecreaseProgress, updateTotalIncome, income] =
    useStore((store) => [
      store.updateIncreaseProgress,
      store.updateDecreaseProgress,
      store.updateTotalIncome,
      store.totalIncome,
    ]);
  const [totalIncome, setTotalIncome] = useState(income);

  return (
    <div className="absolute top-[53%]    -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="">
        <p className="text-4xl w-[600px] font-bold text-[#113b5e]">
          What&#39;s your total annual income, before taxes?
        </p>
        <p className="text-lg w-[620px] pt-4 pb-8  text-gray-700">
          Understanding your total income from all sources helps us personalize
          the best loan offer for you.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">Total Annual Income</p>
          <div className="flex  border-2 bg-cyan-50  border-cyan-700 group px-2 -space-x-2  items-center ">
            <BiRupee className="" size={25} />
            <input
              type="number"
              name="loanAmount"
              id=""
              value={totalIncome}
              onChange={(e) => {
                setTotalIncome(e.target.value)
              }}
              onBlur={() => {
                updateTotalIncome(totalIncome)

              }}
              // onChange={handleChange}
              className=" w-full py-2 bg-cyan-50  font-semibold  outline-none rounded px-4 text-xl"
            />
          </div>
          <p className="text-gray-500">
            Enter an amount between ₹1,000 and ₹40,000
          </p>
        </div>
        <div className="px-8 pt-12" >
          <Dropdown />
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/primarydob"} onClick={updateDecreaseProgress}>
            <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
              <MdArrowBackIos size={24} className="text-sky-600" />
            </div>
          </Link>
          <Link href={"/loanAmount"} onClick={updateIncreaseProgress}>
            <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
              Next
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrimaryIncome;
