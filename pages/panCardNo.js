import { useStore } from "@/useStore/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdArrowBackIos } from "react-icons/md";

import { db } from "../config/firebase";
import {
  getDocs,
  addDoc,
  doc,
  collection,
  setDoc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";




const PanCardNo = ({submit}) => {
  const [
    updateIncreaseProgress,
    updateDecreaseProgress,
    username,
    panCardNo,
    updatePanCardNo,
    getUser,
    userDetails,
  ] = useStore((store) => [
    store.updateIncreaseProgress,
    store.updateDecreaseProgress,
    store.username,
    store.panCardNo,
    store.updatePanCardNo,
    store.updateUserDetails,
    store.userDetails,
  ]);
  const [panNo, setPanNo] = useState(panCardNo);

  const userCollection = collection(db, "users");

// const getUser = async () => {
//   console.log('sddscdsds');
  
//   try {
//     const data = await getDocs(userCollection);
//     const filteredData = data.docs.map((doc) => ({
//       ...doc.data(),
//       id: doc.id,
//     }));
//     // const userData = filteredData.filter((item) => item.id === id);
//     // console.log("usedatadf", userData[0]);
//     // const sliceData = userData[0];
//     console.log(filteredData, "filter");
//     // return sliceData

//   } catch (err) {
//     console.log(err.message);
//   }
// };

  const users = async ()=>{
    // getUser("nNF0DJjERl1CuOaW2qN0");
    // submit()
  }

  // console.log("dssrohit asiva saos", userDetails,"rpohtrio");

  return (
    <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div className="">
        <p className="text-4xl font-bold text-[#113b5e]">
          We need a little more information.
        </p>
        <p className="text-lg pt-4 pb-8 w-[600px]  text-gray-700">
          We weren&#39;t able to find your credit report with the details you
          shared so far. Please enter your Social Security Number so we can try
          again.
        </p>
        <div>
          <p className="font-semibold pb-1 text-lg ">
            {username.firstName}&#39;s PAN CARD number
          </p>
          <div>
            <input
              type="number"
              name=""
              id=""
              value={panNo}
              onChange={(e) => {
                setPanNo(e.target.value);
              }}
              onBlur={() => {
                updatePanCardNo(panNo);
              }}
              className=" w-full py-2  outline-none border-2 rounded border-cyan-700 px-4 text-xl"
            />
          </div>
        </div>

        <div className="flex justify-center pt-14 items-center space-x-4 ">
          <Link href={"/dashboard"} onClick={users}>
            <div className="w-56 font-semibold  bg-sky-600 hover:bg-[#114671] mx-auto text-white text-center py-3">
              Get Your Rate
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PanCardNo;
