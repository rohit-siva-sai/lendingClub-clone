import SetSideBar from "@/components/setSideBar";
import { useStore } from "@/useStore/store";
import React, { useState } from "react";

const Address = ({ updateUser }) => {
  const [userDetails, userId] = useStore((store) => [
    store.userDetails,
    store.userId,
  ]);

  const [address, setAddress] = useState(userDetails.address);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [extend, setExtend] = useState(false);
  const handleChangeAddress = (e) => {
    setName("address");
    setAddress((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    //   setShowTick(true);
  };
  const showExtend = () => {
    setExtend(true);
  };
  const cancelExtend = () => {
    setExtend(false);
  };

  const handleBlurAddress = () => {
    const user = JSON.parse(localStorage.getItem("userDetails"));
    console.log(address, "rohit siva saio");

    const id = user.uid;
    setLoading(true);
    updateUser(name, address, userDetails.username);

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
              <p className="text-[#113b5e] font-bold text-4xl">Address</p>
              <div
                onClick={showExtend}
                className=" text-[#113b5e] font-semibold cursor-pointer hover:text-cyan-600"
              >
                Edit
              </div>
            </div>

            <div className="pt-6">
              {!extend && (
                <div>
                  <div className="flex flex-col space-y-0 items-start">
                    <p className="text-[#113b5e]  text-xl font-medium">
                      <span className="text-gray-500 pr-1 text-base">
                        Street:{" "}
                      </span>{" "}
                      {userDetails?.address?.street},
                    </p>
                    <p className="text-[#113b5e]  text-xl font-medium">
                      <span className="text-gray-500 pr-1 text-base">
                        City:{" "}
                      </span>
                      {userDetails?.address?.city},
                    </p>
                    <p className="text-[#113b5e]  text-xl font-medium">
                      <span className="text-gray-500 pr-1 text-base">
                        State:{" "}
                      </span>
                      {userDetails?.address?.state},
                    </p>
                    <p className="text-[#113b5e]  text-xl font-medium">
                      <span className="text-gray-500 pr-1 text-base">
                        Pin Code:{" "}
                      </span>
                      {userDetails?.address?.zip}
                    </p>
                  </div>
                </div>
              )}
              {extend && (
                <div className="my-3 transition-all duration-300">
                  {/* <div className="flex w-3/4  border-2 bg-cyan-50  border-cyan-700 group px-2 -space-x-2  items-center ">
                    <input
                      type="number"
                      name="totalIncome"
                      id=""
                      value={address}
                      onChange={handleChangeIncome}
                      className=" w-full py-2 bg-cyan-50  font-semibold  outline-none rounded px-4 text-xl"
                    />
                  </div> */}
                  <div>
                    <div className="w-3/4">
                      <p className="font-semibold pb-1 text-lg ">
                        Street Address
                      </p>
                      <div className="">
                        <input
                          type="text"
                          name="street"
                          id=""
                          value={address.street}
                          onChange={handleChangeAddress}
                          // onChange={handleChange}
                          className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4"
                        />
                      </div>
                      <p className="text-gray-500">
                        Enter a residential Address (no P.O. boxes or commercial
                        addresses)
                      </p>
                    </div>
                    <div className="pt-6 w-3/4">
                      <p className="font-semibold pb-1 text-lg ">City</p>
                      <div className="">
                        <input
                          type="text"
                          name="city"
                          id=""
                          value={address.city}
                          onChange={handleChangeAddress}
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
                            name="state"
                            id=""
                            value={address.state}
                            onChange={handleChangeAddress}
                            className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
                          />
                        </div>
                      </div>
                      <div className="">
                        <p className="font-semibold pb-1 text-lg ">ZipCode</p>
                        <div className="">
                          <input
                            type="number"
                            name="zip"
                            id=""
                            value={address.zip}
                            onChange={handleChangeAddress}
                            className=" w-full py-2 border-2 border-cyan-700 bg-cyan-50  font-medium  outline-none text-xl  px-4 "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <p className="font-semibold text-gray-500 pt-6 pb-4 text-lg">
                    Only include your primary source of income
                  </p> */}
                  <div className="flex mt-10 space-x-3">
                    <div
                      onClick={handleBlurAddress}
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

export default Address;
