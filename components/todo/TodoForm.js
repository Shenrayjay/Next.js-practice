import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodo(value);
      setValue(""); // 提交後清空輸入框
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-black border border-white p-2 w-72 text-white"
          placeholder="請輸入您的代辦事項"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="submit"
          className="border border-white p-2 bg-white text-black mt-2"
        >
          加入
        </button>
      </form>
    </div>
  );
}
