import SetSideBar from "@/components/setSideBar";
import { useStore } from "@/useStore/store";
import React, { useState } from "react";

const Email = ({ updateUser }) => {
  const [userDetails] = useStore((store) => [store.userDetails]);
  const [extend, setExtend] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState(userDetails.userEmail);
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (e) => {
    setName(e.target.name);
    setEmail(e.target.value);
  };
  const showExtend = () => {
    setExtend(true);
  };
  const cancelExtend = () => {
    setExtend(false);
  };

  const handleBlurEmail = () => {
    setLoading(true);
    updateUser(name, email, userDetails.username);

    setLoading(false);
    setExtend(false);
  };
  return (
    <div className="mt-6">
      <div className="flex justify-center space-x-12 ">
        <SetSideBar />

        <div className="w-1/2  mt-14">
          <div className="border rounded pt-6 pb-8 px-8 shadow-md">
            <div className="flex justify-between">
              <p className="text-[#113b5e] font-bold text-4xl">Email</p>
              <div
                onClick={showExtend}
                className=" text-[#113b5e] font-semibold cursor-pointer hover:text-cyan-600"
              >
                Edit
              </div>
            </div>

            <div className="pt-6">
              <p className="text-gray-700 text-lg font-semibold">
                Email address
              </p>
              {!extend && (
                <p className="text-[#113b5e]  text-xl font-medium">
                  {userDetails?.userEmail}
                </p>
              )}
              {extend && (
                <div className="my-3 transition-all duration-300">
                  <div className="w-3/4 ">
                    <input
                      type="email"
                      name="userEmail"
                      id=""
                      value={email}
                      onChange={handleChangeEmail}
                      className=" w-full py-2 border-2 border-cyan-700  bg-cyan-50 my-auto font-semibold  outline-none rounded px-4 text-xl"
                    />
                  </div>
                  {/* <p className="font-semibold text-gray-500 pt-6 pb-4 text-lg">
                      Only include your primary source of income
                    </p> */}
                  <div className="flex mt-10 space-x-3">
                    <div
                      onClick={handleBlurEmail}
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
  );
};

export default Email;
