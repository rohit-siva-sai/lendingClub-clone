import SetSideBar from "@/components/setSideBar";
import { useStore } from "@/useStore/store";
import React from "react";

const PhoneNumber = () => {
  const [userDetails] = useStore((store) => [store.userDetails]);
  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-12 ">
        <SetSideBar />
        <div className="w-1/2  mt-14">
          <div className="border rounded pt-6 pb-8 px-8 shadow-md">
            <p className="text-[#113b5e] font-bold text-4xl">Phone Number</p>
            <div className="flex justify-start space-x-64 pt-6">
              <div>
                <p className="text-gray-700 text-lg font-semibold">
                  Personal Phone Number
                </p>
                <p className="text-[#113b5e]  text-xl font-semibold pt-1">
                  {userDetails?.phoneNumber}
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneNumber;
