import React, { useEffect, useState } from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { useStore } from "@/useStore/store";
import { useRouter } from "next/router";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 7,
  borderRadius: 0,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 400 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 0,
    backgroundColor: theme.palette.mode === "light" ? "#1b4d76" : "#1b4d76",
  },
}));

const ProgressBar = () => {
  const progress = useStore((store) => store.progress);
  // console.log("assa",progress)

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
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    if (exempted.includes(router.pathname)) {
      setShowBar(false);
    } else {
      setShowBar(true);
    }
  }, [router]);
  
  return (
    <div className="bg-gray-100">
      {( progress>0 && showBar ) && (
        <div className="py-5 bg-gray-100  z-30 ">
          <BorderLinearProgress
            variant="determinate"
            className="mx-24"
            value={progress}
          />
        </div>
      )}
    </div>
  );
};

export default ProgressBar;
