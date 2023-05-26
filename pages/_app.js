import Navbar from "@/components/navbar";
import ProgressBar from "@/components/progressBar";
import "@/styles/globals.css";
import { useStore } from "@/useStore/store";
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

export default function App({ Component, pageProps }) {
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

  const userCollection = collection(db, "users");
  const router = useRouter();

  const getUser = async (id) => {
    console.log("ssdsdsdsddsdsdsdsdsds");

    try {
      const data = await getDocs(userCollection);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      const userData = filteredData.filter((item) => item.id === id);
      console.log("usedatadf", filteredData);
      const sliceData = userData[0];
      console.log(sliceData, "slicedata");
      updateUserDetails(sliceData);
      if (sliceData && sliceData.id === id) return true;
      else return false;
    } catch (err) {
      console.log(err.message);
    }
  };

  const updateUser = async (updateName, updateValue) => {
    let values = {};
    const user = JSON.parse(localStorage.getItem("userDetails"));
    // console.log(user, "rohit siva saio");

    const id = user.uid;

    if (updateName == "totalIncome") {
      values = {
        totalIncome: updateValue,
      };
    } else if (updateName == "userEmail") {
      values = {
        userEmail: updateValue,
      };
    } else if (updateName == "address") {
      values = {
        address: updateValue,
      };
    }

    const userDoc = doc(db, "users", id);
    console.log("rohit siva sai logging");

    await updateDoc(userDoc, values);
    console.log("updated successfully");
    getUser(id);
  };

  const submitNewUser = async (id) => {
    console.log("rohit sivas ai");

    const value = await getUser(id);
    console.log("value", value);

    try {
      if (!value) {
        await setDoc(doc(db, "users", id), {
          address: address,
          dateofBirth: dob,
          loan: loan,
          panCardNumber: panNo,
          phoneNumber: phno,
          totalIncome: income,
          userEmail: email,
          userId: id,
          username: name,

          // id: auth?.currentUser?.uid,
          // id: "GCiTcEWLwbOBNj2n5JEmivzN8A62",
        });
        getUser(id);
      } else {
        // getUser(currentUser.id);
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };
  const logOut = async () => {
    signOut(getAuth())
      .then(() => {
        console.log("Sign-out successful.");
        localStorage.removeItem("userDetails");
        // updateUserDetails(null);
        router.push("/");
        // router.reload()
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    <>
      <Navbar logOut={logOut} />
      <ProgressBar />
      <Component
        submitNewUser={submitNewUser}
        updateUser={updateUser}
        {...pageProps}
      />
    </>
  );
}
