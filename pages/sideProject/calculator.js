import { useState } from "react";
import Navbar from "@/components/navbar";

export default function Calculator() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const operators = ["/", "*", "+", "-", "."];

  const upDateCalc = (value) => {
    //防止兩個運算符號相連
    if (
      (operators.includes(value) && calc === "") ||
      (operators.includes(value) && operators.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!operators.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const calculate = () => {
    setCalc(eval(calc).toString());
  };

  const deleteCalc = () => {
    if (calc == "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };

  const backToZero = () => {
    setCalc("");
    setResult("");
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => upDateCalc(i.toString())}
          className="flex justify-center items-center text-white bg-blue-800 p-4 flex-1 hover:opacity-90"
          key={i}
        >
          {i}
        </button>
      );
    }
    return digits;
  };
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center h-[calc(100vh-64px)]">
        <div className="w-full max-w-96 bg-white rounded-xl overflow-hidden">
          <div className="p-4  text-right  text-2xl font-light bg-blue-800">
            {result ? (
              <span className="text-sm text-gray-500">({result})</span>
            ) : (
              ""
            )}
            {calc || "0"}
          </div>
          <div className="flex">
            <button
              onClick={() => upDateCalc("/")}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              /
            </button>
            <button
              onClick={() => upDateCalc("*")}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              *
            </button>
            <button
              onClick={() => upDateCalc("+")}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              +
            </button>
            <button
              onClick={() => upDateCalc("-")}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              -
            </button>
            <button
              onClick={deleteCalc}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              DEL
            </button>
            <button
              onClick={backToZero}
              className="p-4 cursor-pointer transition duration-500 hover:opacity-90 flex-1 bg-pink-500 flex justify-center items-center"
            >
              AC
            </button>
          </div>
          <div className="grid grid-cols-3">
            {createDigits()}
            <button
              onClick={() => upDateCalc("0")}
              className="flex justify-center items-center bg-blue-800 p-4 flex-1 hover:opacity-90"
            >
              0
            </button>
            <button
              onClick={() => upDateCalc(".")}
              className="flex justify-center items-center bg-blue-800 p-4 flex-1 hover:opacity-90"
            >
              .
            </button>
            <button
              onClick={calculate}
              className="flex justify-center items-center bg-blue-800 p-4 flex-1 hover:opacity-90"
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
