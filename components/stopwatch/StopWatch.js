import { useState, useEffect, useRef } from "react";

export default function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timePass, setTimePass] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setTimePass(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - timePass;
  }
  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setTimePass(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(timePass / (1000 * 60 * 60));
    let minutes = Math.floor((timePass / (1000 * 60)) % 60);
    let seconds = Math.floor((timePass / 1000) % 60);
    let milliseconds = Math.floor((timePass % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    return `${minutes}:${seconds}:${milliseconds}`;
  }

  return (
    <>
      <div className="flex flex-col items-center border border-white rounded-lg bg-gray-300 p-9 ">
        <div className="text-black text-7xl font-bold mb-6 w-96 text-center">
          {formatTime()}
        </div>
        <div className="flex gap-2">
          <button
            onClick={start}
            className="btn btn-success hover:text-white text-xl"
          >
            Start
          </button>
          <button
            onClick={stop}
            className="btn btn-error hover:text-white text-xl"
          >
            Stop
          </button>
          <button
            onClick={reset}
            className="btn btn-info hover:text-white text-xl"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}
