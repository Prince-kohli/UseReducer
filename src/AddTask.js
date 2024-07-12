import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");
  return (
    <div className="d-flex container">
      <input
        className="form-control me-2"
        placeholder="Add task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="btn btn-outline-success"
        onClick={() => {
          setText("");
          onAddTask(text);
        }}
      >
        Add
      </button>
    </div>
  );
}
