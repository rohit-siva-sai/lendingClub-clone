import { useStore } from "@/useStore/store";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { TbMinusVertical } from "react-icons/tb";

const Navbar = ({ logOut }) => {
  const exempted = [
    "/dashboard",
    "/settings/profile",
    "/settings/privacy",
    "/settings/email",
    "/settings/password",
    "/settings/phoneNumber",
    "/settings/address",
  ];
  const router = useRouter();
  const [detail, setDetail] = useState(false);

  useEffect(() => {
    if (exempted.includes(router.pathname)) {
      setDetail(true);
    } else {
      setDetail(false);
    }
  }, [router]);

  const [userDetails] = useStore((store) => [store.userDetails]);

  return (
    <div className="sticky h-fit   top-0 z-40">
      <div
        className={`bg-[#113b5e] flex justify-between ${
          detail ? "px-56" : "px-12"
        }  py-4 items-center`}
      >
        <div className="flex flex-col space-y-1">
          <Link href={"/"}>
            <picture>
              <img
                src="https://www.lendingclub.com/apply/assets/_/_/node_modules/ui-header/src/images/lc-logo-white-5c3e3a9e80c31a8502322e9d636ca784.svg"
                alt=""
                className="w-40"
              />
            </picture>
          </Link>
          {detail && (
            <div className="flex  text-white font-bold text-2xl">
              Welcome, &nbsp;
              <p className="first-letter:uppercase">
                {userDetails?.username?.firstName}
              </p>{" "}
            </div>
          )}
        </div>
        {!detail && (
          <div className="flex space-x-2  items-center">
            <Link href={""}>
              <div className="font-semibold text-[15px] text-white hover:text-blue-500  ">
                Privacy
              </div>
            </Link>
            <TbMinusVertical className="text-white " size={25} />
            <Link href={""}>
              <div className="font-semibold text-[15px] text-white hover:text-blue-500  ">
                Help
              </div>
            </Link>
            <TbMinusVertical className="text-white " size={25} />

            <Link href={"/signIn"}>
              <div className="font-semibold  cursor-pointer px-2 py-1 border rounded-md hover:border-2 text-[15px] text-white  ">
                Sign In
              </div>
            </Link>
          </div>
        )}
        {detail && (
          <div className="flex space-x-2  items-center">
            <Link href={"/settings/profile"}>
              <div className="font-semibold uppercase text-[15px] text-white hover:text-blue-500  ">
                settings
              </div>
            </Link>
            <TbMinusVertical className="text-white " size={25} />
            <Link href={""}>
              <div className="font-semibold uppercase text-[15px] text-white hover:text-blue-500  ">
                Refer a friend
              </div>
            </Link>
            <TbMinusVertical className="text-white " size={25} />

            <Link href={""}>
              <div className="font-semibold uppercase text-[15px] text-white hover:text-blue-500  ">
                help
              </div>
            </Link>
            <TbMinusVertical className="text-white " size={25} />

            <div
              onClick={logOut}
              className="font-semibold cursor-pointer uppercase text-[15px] text-white hover:text-blue-500  "
            >
              sign out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
