
import React, { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { RxCross2 } from "react-icons/rx";
import { MdArrowBackIosNew } from "react-icons/md";
import { FiLoader } from "react-icons/fi";
import OtpInput from "react-otp-input";
import { auth } from "../config/firebase";
import {
  RecaptchaVerifier,
  getAuth,
  signInWithPhoneNumber,
  signOut,
} from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";

import { useEffect } from "react";

import * as firebase from "firebase/app";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { useStore } from "@/useStore/store";

const SignIn = () => {

    const [phoneNumber, setPhoneNumber] = useState(false);
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const refPhone = useRef();
  


  const [updatePhoneNumber,updateUserId] = useStore((store)=>[store.updatePhoneNumber,store.updateUserId])


  const onCaptchaVerify = async () => {
    // let appVerify = new auth.RecaptchaVerifier('recaptcha-container');

    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            return;
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        },

        getAuth()
      );
    }
    // const recaptchaVerifier = new RecaptchaVerifier(
    //   "recaptcha-container",
    //   {},
    //   auth
    // );
    // recaptchaVerifier.render();
    // <return></return>
  };

  const onSignup = () => {
    if (
      phoneNumber == " " ||
      phoneNumber.length != 13 ||
      phoneNumber == undefined
    ) {
      return setError("Enter valid Phone Number");
    }
    setLoading(true);

    console.log(phoneNumber.length);
    onCaptchaVerify();

    const appVerify = window.recaptchaVerifier;
    signInWithPhoneNumber(getAuth(), phoneNumber, appVerify)
      .then((confirmationResult) => {
        
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOtp(true);
        toast.success("otp sent successfully");

        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log(error, "tjis sabdu");
        // console.log(error.message);
        if(error.message=="reCAPTCHA client element has been removed: 0")
        router.reload()
        setError(error.message);
        setLoading(false);
      });
  };

  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("sdcd", res);
        // handleUser(res.user);
        // console.log("uxeuyvwedwveug", user);

        localStorage.setItem("userDetails", JSON.stringify(res.user))
        updateUserId(res.user.uid)
        router.push("/dashboard");
      
      })
      .catch((err) => {
        console.log(err, "wedwede");
        // setError(error.message);
        setLoading(false);
      });
  };

  return (
    <>
    <Toaster toastOptions={{ duration: 4000 }} />

    <div className="absolute top-[53%]   -translate-x-[50%] -translate-y-[50%] left-[50%]">
      <div>
        <p className="text-4xl font-bold text-[#113b5e]">
          What&#39;s your phone number?
        </p>
        <p className="text-lg pt-4   text-gray-700">
          If we have any questions, we&#39;ll be sure to reach out.
        </p>
        <p className="text-lg pt-4 pb-8  text-gray-700">
          Login or SignUp with your phone number
        </p>
      </div>
      <div>
        {showOtp ? (
          <div className="">
            <div className=" font-semibold flex items-center border  self-start text-gray-700  text-lg">
              <div
                onClick={() => {
                  setShowOtp(false);
                }}
                className=" cursor-pointer p-2 bg-white shadow-md border hover:bg-gray-100 "
              >
                <MdArrowBackIosNew className="text-2xl text-blue-500" />
              </div>
              <p className="pl-24 text-2xl">Enter 6 digit OTP</p>
            </div>
            <div className="bg-white flex justify-center pt-6 ">
              <OtpInput
                value={otp}
                onChange={setOtp}
                autoFocus
                numInputs={6}
                renderInput={(props) => <input {...props} />}
                inputStyle={{
                  fontSize: "30px",
                  border: "1px solid gray ",
                  marginInline: "5px",
                  width: "50px",
                  height: "50px",
                }}
                className="p- text-xl border"
              />
            </div>
            <div
              onClick={onOTPVerify}
              className="flex items-center mt-8 mx-auto w-fit rounded-md py-2 px-2 cursor-pointer hover:bg-[#113b5e] bg-sky-600  space-x-2"
            >
              <p>
                {loading && (
                  <FiLoader className="text-white text-2xl animate-spin" />
                )}
              </p>
              <p className="text-white text-sm font-semibold md:block hidden ">
                Verify OTP
              </p>
            </div>
            <div className="flex items-center space-x-10 pt-8 justify-between ">
              <p className="text-sm font-semibold">
                Didn&apos;t recieve the code ?
              </p>
              <div
                onClick={onSignup}
                className="hover:text-[#113b5e] text-sky-600 cursor-pointer  uppercase font-bold  text-base md:block hidden "
              >
                Resend OTP
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full  flex flex-col items-start space-y-8 rounded-lg  bg-white">
            {/* <p className="self-start font-semibold pl-2 text-gray-700  text-lg">
              LogIn or SignUp
            </p> */}
            <div className="">
              <PhoneInput
                placeholder="Enter phone number"
                defaultCountry="IN"
                autoFocus
                value={phoneNumber}
                ref={refPhone}
                onChange={setPhoneNumber}
                className="border-2  text-3xl outline-none rounded-lg  px-2 py-2 hover:border-blue-500 text-gray-600  font-semibold"
                onBlur={()=>{updatePhoneNumber(phoneNumber)}}
              />
            </div>
            <div className="absolute bottom-0 right-0 ">
              <div
                id="recaptcha-container"
                style={{ position: "fixed", bottom: "0px", right: "0px" }}
                className="opacity-0"
              ></div>
            </div>
            <div className="flex space-x-1  w-[600px]  items-center  ">
              <picture>
                <img
                  src="https://www.lendingclub.com/apply/assets/pi1-1QAAT/images/lock-icon-53827a5d3338fada09ecd706df7b7800.svg"
                  alt=""
                  className="w-12"
                />
              </picture>
              <p className="text-start text-cyan-800 ">
                We&#39;re serious about security, so we encrypt every page of
                our website with Secure Socket Layer (SSL) to protect your
                data.
              </p>
            </div>
            <div
              onClick={onSignup}
              className="flex items-center self-center  md:px-16 w-fit rounded-md py-2 px-2 cursor-pointer bg-sky-600 hover:bg-[#113b5e]  space-x-2"
            >
              {loading && (
                <FiLoader className="text-white text-2xl animate-spin" />
              )}

              <p className="text-white text-xl font-semibold md:block hidden ">
                Continue
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
  )
}

export default SignIn
