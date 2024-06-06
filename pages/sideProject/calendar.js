import React from "react";
import MyCalendar from "@/components/calendar/calendar";
import Navbar from "@/components/navbar";

export default function Calendar() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-black">
        <MyCalendar />
      </div>
    </>
  );
}
