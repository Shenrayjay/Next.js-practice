import React from "react";
import StopWatch from "@/components/stopwatch/StopWatch";
import Navbar from "@/components/navbar";

export default function StopWatchPage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <StopWatch />
      </div>
    </>
  );
}
