import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useState } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { BiRupee } from "react-icons/bi";

// const initValues = { loanAmount: 1000, loanPurpose: "" };


const LoanAmount = () => {
  const [updateIncreaseProgress, updateDecreaseProgress, updateLoan, initValues] =
  useStore((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.updateLoan,
    store.loan,
  ]);
const [loan, setLoan] = useState(initValues);

const handleChange = ({ target }) => {
  setLoan((prev) => ({
    ...prev,
    [target.name]: target.value,
  }));
  updateLoan(loan)
};




return (
  <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
    <div className="">
      <p className="text-4xl font-bold text-[#113b5e]">
        How much are you looking for?
      </p>
      <p className="text-lg pt-4 pb-8  text-gray-700">
        We&#39;ll try to match your financial needs as closely as possible.
      </p>
      <div>
        <p className="font-semibold pb-1 text-lg ">Loan Amount</p>
        <div className="flex  border-2 bg-cyan-50  border-cyan-700 group px-2 -space-x-2  items-center ">
          <BiRupee className="" size={25} />
          <input
            type="number"
            name="loanAmount"
            id=""
            value={loan.loanAmount}
            onChange={(e) => {
              setLoan((prev) => ({ ...prev, loanAmount: e.target.value }));
              // updateLoan(loan);
            }}
            onBlur={()=>{updateLoan(loan)}}
            // onChange={handleChange}
            className=" w-full py-2 bg-cyan-50  font-semibold  outline-none rounded px-4 text-xl"
          />
        </div>
        <p className="text-gray-500">
          Enter an amount between ₹1,000 and ₹40,000
        </p>
      </div>
      <div className="pt-6">
        <p className="font-semibold pb-1 text-lg ">Loan Purpose</p>
        <div className="">
          <select
            name="loanPurpose"
            id=""
            value={loan.loanPurpose}
            onChange={(e) => {
              setLoan((prev) => ({ ...prev, loanPurpose: e.target.value }));
            
            }}
            onBlur={()=>{updateLoan(loan)}}
            // onChange={handleChange}
            className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
          >
            <option className="text-lg" value=" " selected>
              What's the money for?
            </option>
            <option className="text-lg" value="Credit_card_refinancing">
              Credit card refinancing
            </option>
            <option className="text-lg" value="Debt_consolidation">
              Debt consolidation
            </option>
            <option className="text-lg" value="Home_improvement">
              Home improvement
            </option>
            <option className="text-lg" value="Major_purpose">
              Major purpose
            </option>
            <option className="text-lg" value="Home_buying">
              Home buying
            </option>
            <option className="text-lg" value="Car_financing">
              Car financing
            </option>
            <option className="text-lg" value="Green_loan">
              Green loan
            </option>
            <option className="text-lg" value="Business">
              Business
            </option>
            <option className="text-lg" value="Vacation">
              Vacation
            </option>
            <option className="text-lg" value="Moving_and_relocation">
              Moving and relocation
            </option>
            <option className="text-lg" value="Medical expences">
              Medical expences
            </option>
            <option className="text-lg" value="Others">
              Others
            </option>
          </select>
        </div>
      </div>

      <div className="flex justify-center pt-14 items-center space-x-4 ">
        <Link href={"/primaryIncome"} onClick={updateDecreaseProgress}>
          <div className="hover:bg-gray-100 bg-white py-3 pl-4 pr-2 shadow-md  flex justify-center">
            <MdArrowBackIos size={24} className="text-sky-600" />
          </div>
        </Link>
        <Link href={"/primaryName"} onClick={updateIncreaseProgress}>
          <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
            Next
          </div>
        </Link>
      </div>
    </div>
  </div>
);
}

export default LoanAmount
