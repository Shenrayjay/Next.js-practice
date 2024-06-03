import React from "react";
import { FaFilePen } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";

export default function TodoDetails({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
  return (
    <div className="w-80 flex justify-between items-center px-2 py-2 border border-white rounded-xl mb-4 cursor-pointer ">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.task}
      </p>
      <div className="flex gap-2">
        <FaFilePen onClick={() => editTodo(task.id)} />
        <FaTrashAlt onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
}
