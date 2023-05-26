import React from "react";
import { useEffect } from "react";
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
import { useRouter } from "next/router";
import { useStore } from "@/useStore/store";
import Link from "next/link";

const Dashboard = ({submitNewUser}) => {
  const [
    loanType,
    dob,
    loan,
    income,
    name,
    address,
    email,
    phno,
    userId,
    panNo,
    userDetails,
    updateUserDetails,
  ] = useStore((store) => [
    store.loanType,
    store.dob,
    store.loan,
    store.totalIncome,
    store.username,
    store.userAddress,
    store.userEmail,
    store.phoneNumber,
    store.userId,
    store.panCardNo,
    store.userDetails,
    store.updateUserDetails,
  ]);
  console.log(
    "loan",
    loanType,
    dob,
    loan,
    income,
    name,
    address,
    email,
    phno,
    userId,
    panNo,
    userDetails
  );
  const router = useRouter();
  const userCollection = collection(db, "users");

  // const getUser = async (id) => {
  //   console.log("ssdsdsdsddsdsdsdsdsds");

  //   try {
  //     const data = await getDocs(userCollection);
  //     const filteredData = data.docs.map((doc) => ({
  //       ...doc.data(),
  //       id: doc.id,
  //     }));
  //     const userData = filteredData.filter((item) => item.id === id);
  //     console.log("usedatadf", filteredData);
  //     const sliceData = userData[0];
  //     console.log(sliceData, "slicedata");
  //     updateUserDetails(sliceData);
  //     if (sliceData && sliceData.id === id) return true;
  //     else return false;
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

 
  // const submitNewUser = async (id) => {
  //   console.log("rohit sivas ai");

  //   const value = await getUser(id);
  //   console.log("value", value);

  //   try {
  //     if (!userDetails) {
  //       await setDoc(doc(db, "users", id), {
  //         address: address,
  //         dateofBirth: dob,
  //         loan: loan,
  //         panCardNumber: panNo,
  //         phoneNumber: phno,
  //         totalIncome: income,
  //         userEmail: email,
  //         userId: id,
  //         username: name,

  //         // id: auth?.currentUser?.uid,
  //         // id: "GCiTcEWLwbOBNj2n5JEmivzN8A62",
  //       });
  //       getUser(id);
  //     } else {
  //       // getUser(currentUser.id);
  //       return;
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    try {
      if (localStorage.getItem("userDetails")) {
        const userDetails = JSON.parse(localStorage.getItem("userDetails"));
        const id = userDetails.uid;

        submitNewUser(id)
      }
    } catch (error) {
      console.log(error.message);
    }
    if (!localStorage.getItem("userDetails")) {
      router.push("/loanType");
    }
  }, [router]);
  // const submit = () => {
  //   // try {
  //   //   if (localStorage.getItem("userDetails")) {
  //       const userDetails = JSON.parse(localStorage.getItem("userDetails"));
  //       const id = userDetails.uid;

  //       console.log("assasas",id);

  //       submitNewUser(id);
  //       // getCurrentUser(profileUser);

  //       // console.log(userDetails.uid);
  //     // }
  //   // } catch (error) {
  //   //   console.log(error.message);
  //   // }
  // }

  return (
    <div>
      <div className="text-center py-16 text-5xl text-[#113b5e] font-bold" >
        Dashboard
      </div>
    </div>
  );
};

export default Dashboard;
