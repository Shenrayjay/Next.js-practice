import { useState, useEffect } from "react";

export default function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formateTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const amPm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12; //採用 AM / PM

    return `${frontZero(hours)}:${frontZero(minutes)}:${frontZero(
      seconds
    )} ${amPm}`;
  }

  function frontZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="border border-white rounded-xl p-9 bg-gray-200 ">
      <div className="text-8xl text-black">
        <span>{formateTime()}</span>
      </div>
    </div>
  );
}
