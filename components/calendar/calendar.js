import React, { useState } from "react";
import _ from "lodash";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import Link from "next/link";

export default function TripCalendar() {
  // 以假資料展示有行程時的樣式
  // const mockEvents = [
  //   { day: 1, content: "Happy Date 1" },
  //   { day: 8, content: "我的第一次約會" },
  //   { day: 5, content: "我的行程" },
  //   { day: 20, content: "和David一起看電影" },
  //   { day: 22, content: "Mike生日" },
  // ];

  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDays = ["日", "一", "二", "三", "四", "五", "六"];
  const [selectedDate, setSelectedDate] = useState(null);
  const [modalDate, setModalDate] = useState("");

  const renderCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const prevMonthTotalDays = new Date(year, month, 0).getDate();
    const previousMonthDays = Array.from({ length: firstDay }, (_, i) => ({
      day: prevMonthTotalDays - firstDay + i + 1,
      isCurrentMonth: false,
    }));

    const thisMonthDays = Array.from({ length: totalDays }, (_, i) => {
      const day = i + 1;
      // const event = mockEvents.find((event) => event.day === day);
      //若需要展示行程再打開
      return {
        day,
        isCurrentMonth: true,
      };
    });

    const totalCells = 42;
    const filledCells = previousMonthDays.length + thisMonthDays.length;
    const cellsToAdd = totalCells - filledCells;
    const nextMonthDays = Array.from({ length: cellsToAdd }, (_, i) => ({
      day: i + 1,
      isCurrentMonth: false,
    }));

    const allDays = [...previousMonthDays, ...thisMonthDays, ...nextMonthDays];

    return _.chunk(allDays, 7).map((week, weekIndex) => (
      <tr key={weekIndex}>
        {week.map((cell, dayIndex) => (
          <td
            key={dayIndex}
            style={{ verticalAlign: "top" }}
            className={`text-sm sm:text:base h-12 sm:w-48 sm:h-20 text-center border border-white ${
              cell.isCurrentMonth
                ? "text-white bg-black cursor-pointer"
                : "text-gray-500 bg-black"
            }`}
          >
            {cell.day}
            {/* {cell.content && (
              <div className="sm:mt-3 flex justify-center items-center">
                <Link href="#" legacyBehavior>
                  <a className="hidden sm:inline-block text-sm bg-black px-2 py-1 border border-white rounded-full hover:bg-[#a0ff1f] hover:text-black hover:border-black">
                    {cell.content}
                  </a>
                </Link>
                <Link href="#" legacyBehavior>
                  <a className="block sm:hidden text-white text-lg ">
                    <IoHeartCircleOutline className=" text-[#ff03ff] hover:text-[#a0ff1f]" />
                  </a>
                </Link>
              </div>
            )} */}
          </td>
        ))}
      </tr>
    ));
  };

  const handleDayClick = (day) => {
    const selected = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    setSelectedDate(selected);

    // 取得td的日期
    const year = selected.getFullYear();
    const month = selected.getMonth() + 1; // getMonth() 返回的月份是從0開始的
    const dayOfMonth = selected.getDate();
    const formattedDate = `${year}-${month
      .toString()
      .padStart(2, "0")}-${dayOfMonth.toString().padStart(2, "0")}`; //padStart(2, '0')可以確保月份是二位數

    setModalDate(formattedDate); // 更新彈跳窗口內的日期

    setIsModalOpen(true); // Open the modal dialog
  };

  return (
    <>
      <div className="min-h-[calc(100vh-200px)] flex flex-col justify-center items-center bg-black mb-5">
        <div className="flex justify-center items-center gap-12 mb-2 mt-2">
          <button
            className="text-3xl hover:text-[#a0ff1f] text-white"
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
              )
            }
          >
            <FaArrowAltCircleLeft />
          </button>
          <p className="text-2xl text-white">
            {`${currentDate.getFullYear()}/${currentDate.getMonth() + 1}`}
          </p>
          <button
            className="text-3xl hover:text-[#a0ff1f] text-white"
            onClick={() =>
              setCurrentDate(
                new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
              )
            }
          >
            <FaArrowAltCircleRight />
          </button>
        </div>
        <table className="table-auto">
          <thead>
            <tr>
              {weekDays.map((day, i) => (
                <th
                  key={i}
                  className="w-12 sm:w-48 sm:h-8 text-center text-black bg-white first:rounded-tl-lg last:rounded-tr-lg"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{renderCalendarDays()}</tbody>
        </table>
      </div>
    </>
  );
}
