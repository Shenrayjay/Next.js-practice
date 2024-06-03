import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 justify-center items-center  h-[calc(100vh-64px)]">
      <h1 className="text-lg">
        這裡是幾個我以Next.js、Tailwind和dasiyUI所製作出來的簡易功能
      </h1>
      <div className="flex flex-col gap-5">
        <Link href="/sideProject" className="btn btn-accent">
          代辦事項
        </Link>
        <Link href="/sideProject/calendar" className="btn btn-accent">
          月曆
        </Link>
        <Link href="/sideProject/calculator" className="btn btn-accent">
          簡易計算機
        </Link>
        <Link href="/sideProject/stopwatch" className="btn btn-accent">
          簡易碼錶
        </Link>
        <Link href="/sideProject/clock" className="btn btn-accent">
          電子時鐘
        </Link>
      </div>
    </div>
  );
}
