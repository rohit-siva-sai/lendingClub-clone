import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

const SetSideBar = () => {
  const router = useRouter();

  const [obj, setObj] = useState({
    profile: false,
    phoneNumber: false,
    email: false,
    privacy: false,
    address: false,
    password: false,
  });


  useEffect(() => {
    if (router.pathname.includes("profile")) {
      setObj((prev) => ({
        profile: true,
        phoneNumber: false,
        email: false,
        privacy: false,
        address: false,
        password: false,
      }));
    } else if (router.pathname.includes("email")) {
      setObj((prev) => ({
        profile: false,
        phoneNumber: false,
        email: true,
        privacy: false,
        address: false,
        password: false,
      }));
    } else if (router.pathname.includes("phoneNumber")) {
      setObj((prev) => ({
        profile: false,
        phoneNumber: true,
        email: false,
        privacy: false,
        address: false,
        password: false,
      }));
    } else if (router.pathname.includes("privacy")) {
      setObj((prev) => ({
        profile: false,
        phoneNumber: false,
        email: false,
        privacy: true,
        address: false,
        password: false,
      }));
    } else if (router.pathname.includes("address")) {
      setObj((prev) => ({
        profile: false,
        phoneNumber: false,
        email: false,
        privacy: false,
        address: true,
        password: false,
      }));
    } else if (router.pathname.includes("password")) {
      setObj((prev) => ({
        profile: false,
        phoneNumber: false,
        email: false,
        privacy: false,
        address: false,
        password: true,
      }));
    }
  }, [router]);

  return (
    <div className="w-1/5">
      <Link href={"/dashboard"}>
        <div className="flex space-x-1 my-3  items-center cursor-pointer">
          <MdArrowBackIosNew className="text-cyan-600" size={20} />
          <p className="font-semibold text-cyan-600 text-lg">Back</p>
        </div>
      </Link>
      <div className="flex flex-col shadow-md ">
        <div className="text-[#113b5e] text-2xl px-4 py-4 font-semibold border-t">
          Settings
        </div>
        <Link href={"/settings/profile"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.profile ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            profile
          </div>
        </Link>
        <Link href={"/settings/email"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.email ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            email
          </div>
        </Link>
        <Link href={"/settings/phoneNumber"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.phoneNumber ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            Phone Number
          </div>
        </Link>
        <Link href={"/settings/privacy"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.privacy ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            Privacy
          </div>
        </Link>
        <Link href={"/settings/address"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.address ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            Address
          </div>
        </Link>
        <Link href={"/settings/password"}>
          <div
            className={`text-cyan-700 text-lg px-4 py-4 ${
              obj.password ? "bg-gray-100" : "bg-white"
            }  border-t`}
          >
            Password
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SetSideBar;
