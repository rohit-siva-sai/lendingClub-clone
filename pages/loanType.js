import { useStore } from "@/useStore/store";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const LoanType = () => {
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const router = useRouter()

  const [loanType,updateLoanType] = useStore((store)=> [store.loanType,store.updateLoanType])
  const updateIncreaseProgress = useStore((store)=>store.updateIncreaseProgress)

  
  
  return (
    <div className="absolute top-[53%] -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div>
        <p className="text-4xl font-bold text-[#113b5e]">
          Let&#39;s check your rate!
        </p>
        <p className="text-lg pt-4 pb-10 text-gray-700">
          How would you like to apply?
        </p>
        <div className="flex space-x-10">
          <div
            className={`w-72 relative h-44 flex space-y-1 flex-col justify-center items-center border border-gray-600 hover:shadow-[0px_4px_10px_0px] hover:shadow-gray-500 cursor-pointer transition-all duration-500  hover:border-[#113b5e] hover:border-2 ${
              !clicked1 &&
              "border-[#113b5e] shadow-gray-500 border-2 shadow-[0px_4px_10px_0px]"
            } `}
            onClick={() => {
              setClicked1(false);
              setClicked2(true)
              updateLoanType("justme")
            }}
          >
            <picture>
              <img
                src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/loantype-individual-e72387798f175e76207cbb7848d04248.svg"
                alt=""
              />
            </picture>
            <p className="text-lg text-[#113b5e] font-bold ">Just Me</p>
            <div className="absolute top-4 left-6">
              <div className="border-2 rounded-full">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/pi1/components/loan-type-selection-cards/images/icon-selected-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    srcset=""
                    className={`${clicked1 ? "opacity-0" : "opacity-100"}`}
                  />
                </picture>
              </div>
            </div>
          </div>
          <div
            className={`w-72 relative h-44 flex space-y-1 flex-col justify-center items-center border border-gray-600 hover:shadow-[0px_4px_10px_0px] hover:shadow-gray-500 cursor-pointer transition-all duration-500  hover:border-[#113b5e] hover:border-2 ${
              !clicked2 &&
              "border-[#113b5e] shadow-gray-500 border-2 shadow-[0px_4px_10px_0px]"
            } `}
            onClick={() => {
              setClicked2(false);
              setClicked1(true)
              updateLoanType("twoofus")
            }}
          >
            <picture>
              <img
                src="https://www.lendingclub.com/apply/assets/_/shared_modules/common-images/loantype-joint-b830dec43f740c25cd013cca4baaa327.svg"
                alt=""
              />
            </picture>
            <p className="text-lg text-[#113b5e] font-bold ">Two Of Us</p>
            <div className="absolute top-4 left-6">
              <div className="border-2 rounded-full">
                <picture>
                  <img
                    src="https://www.lendingclub.com/apply/assets/_/shared_modules/pi1/components/loan-type-selection-cards/images/icon-selected-064408e206efe43f02a47953722e671a.svg"
                    alt=""
                    srcset=""
                    className={`${clicked2 ? "opacity-0" : "opacity-100"}`}
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
        <p className="font-normal text-center pt-8" >We will make the best offer for you in no time.</p>
        <Link href={"/primarydob"} onClick={updateIncreaseProgress} >
        <div className="w-56 font-semibold mt-7 bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-2" >
          Next
        </div>
        </Link>
        <p className="text-center pt-4 " >Checking your rate won't impact your credit score.*</p>
      </div>
    </div>
  );
};

export default LoanType;
