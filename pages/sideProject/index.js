import React from "react";
import TodoWrapper from "@/components/todo/TodoWrapper";
import Navbar from "@/components/navbar";

export default function TodoList() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh-64px)]">
        <TodoWrapper />
      </div>
    </>
  );
}
