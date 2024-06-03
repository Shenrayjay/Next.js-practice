import DigitalClock from "@/components/clock/DigitalClock";
import Navbar from "@/components/navbar";

export default function Clock() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-custom-black">
        <DigitalClock />
      </div>
    </>
  );
}
