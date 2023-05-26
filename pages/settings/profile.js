import SetSideBar from "@/components/setSideBar";
import { useStore } from "@/useStore/store";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { BiRupee } from "react-icons/bi";
import { FiLoader } from "react-icons/fi";

const Profile = ({ updateUser }) => {
  const [userDetails, userId] = useStore((store) => [
    store.userDetails,
    store.userId,
  ])
  const [income, setIncome] = useState(userDetails?.totalIncome);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [extend, setExtend] = useState(false);
  const router = useRouter()
  const handleChangeIncome = (e) => {
    setName(e.target.name);
    setIncome(e.target.value);

 
  };
  const showExtend = () => {
    setExtend(true);
  };
  const cancelExtend = () => {
    setExtend(false);
  };
  useEffect(() => {
    // window.addEventListener("beforeunload", alertUser);
    // return () => {
    //   window.removeEventListener("beforeunload", alertUser);
    // };
   if(!userDetails)
   {
    router.push("/dashboard")
   }
    
  },[router]);
  // const alertUser = (e) => {
  //   alert("this may hjvsdjhvd the data")
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  const handleBlurIncome = () => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(user, "rohit siva saio");

    const id = user.uid;
    setLoading(true)
    updateUser(name, income);

    setLoading(false);
    setExtend(false);
  };

  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-12 ">
        <SetSideBar />
        <div className="w-1/2  mt-14 "  >
          <div className="flex  flex-col space-y-7">
            <div className="border rounded pt-6 pb-8 px-8 shadow-md">
              <p className="text-[#113b5e] font-bold text-4xl">Personal Info</p>
              <div className="flex justify-start space-x-64 pt-6">
                <div>
                  <p className="text-gray-700 text-lg font-semibold">Name</p>
                  <div className="text-[#113b5e] flex items-center space-x-3 text-xl font-semibold">
                    <p className="first-letter:uppercase">
                      {userDetails?.username?.firstName}
                    </p>{" "}
                    <p className="first-letter:uppercase">
                      {userDetails?.username?.lastName}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-700 text-lg font-medium">
                    Date of Birth
                  </p>
                  <p className="text-[#113b5e]  text-xl font-medium">
                    {userDetails?.dateofBirth}
                  </p>
                </div>
              </div>
            </div>
            <div className="border rounded pt-6 pb-8 px-8 shadow-md">
              <div className="flex justify-between">
                <p className="text-[#113b5e] font-bold text-4xl">Income</p>
                <div
                  onClick={showExtend}
                  className=" text-[#113b5e] font-semibold cursor-pointer hover:text-cyan-600"
                >
                  Edit
                </div>
              </div>

              <div className="pt-6">
                <p className="text-gray-700 text-lg font-semibold">
                  Annual Income
                </p>
                {!extend && (
                  <p className="text-[#113b5e]  text-xl font-medium">
                    {userDetails?.totalIncome}
                  </p>
                )}
                {extend && (
                  <div className="my-3 transition-all duration-300">
                    <div className="flex w-3/4  border-2 bg-cyan-50  border-cyan-700 group px-2 -space-x-2  items-center ">
                      <BiRupee className="" size={25} />
                      <input
                        type="number"
                        name="totalIncome"
                        id=""
                        value={income}
                        onChange={handleChangeIncome}
                        className=" w-full py-2 bg-cyan-50  font-semibold  outline-none rounded px-4 text-xl"
                      />
                    </div>
                    <p className="font-semibold text-gray-500 pt-6 pb-4 text-lg">
                      Only include your primary source of income
                    </p>
                    <div className="flex space-x-3">
                      <div
                        onClick={handleBlurIncome}
                        className="w-56 text-center py-2 text-white font-semibold hover:bg-[#113b5e] rounded hover:shadow-md cursor-pointer bg-sky-600"
                      >
                        <p>save changes</p>
                      </div>
                      <div
                        onClick={cancelExtend}
                        className="w-24 text-center text-[#113b5e] font-semibold bg-sky-50 rounded hover:bg-sky-100  py-2 cursor-pointer "
                      >
                        cancel
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
