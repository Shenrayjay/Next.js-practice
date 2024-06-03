import React from "react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/sideProject">代辦事項</Link>
              </li>
              <li>
                <Link href="/sideProject/calendar">月曆</Link>
              </li>
              <li>
                <Link href="/sideProject/calculator">簡易計算機</Link>
              </li>
              <li>
                <Link href="/sideProject/stopwatch">簡易碼錶</Link>
              </li>
              <li>
                <Link href="/sideProject/clock">電子時鐘</Link>
              </li>
            </ul>
          </div>
          <Link href="/" className="btn btn-ghost text-xl">
            首頁
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/sideProject">代辦事項</Link>
            </li>
            <li>
              <Link href="/sideProject/calendar">月曆</Link>
            </li>
            <li>
              <Link href="/sideProject/calculator">簡易計算機</Link>
            </li>
            <li>
              <Link href="/sideProject/stopwatch">簡易碼錶</Link>
            </li>
            <li>
              <Link href="/sideProject/clock">電子時鐘</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="https://github.com/Shenrayjay">
            <FaGithub className="text-2xl mr-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
