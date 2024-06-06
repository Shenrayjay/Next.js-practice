import Navbar from "@/components/navbar";
import Home from "@/components/project/Home";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-64px)] bg-custom-black">
        {" "}
        <Home />
      </div>
    </>
  );
}
