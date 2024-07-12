import { useState } from "react";

export default function TaskList({ tasks, onChangeTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} onChange={onChangeTask} onDelete={onDeleteTask} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          style={{ marginTop: 10 }}
          value={task.text}
          onChange={(e) => {
            onChange({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button
          style={{ marginLeft: 140, marginTop: 5 }}
          class="btn btn-warning"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          class="btn btn-warning"
          style={{ marginLeft: 150, marginTop: 5 }}
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }
  return (
    <div className="form container">
      <label>
        <input
          style={{ marginRight: 5 }}
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            onChange({
              ...task,
              done: e.target.checked,
            });
          }}
        />
        {taskContent}
        <button
          style={{ marginLeft: 10, marginTop: 5 }}
          class="btn btn-dark"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </label>
    </div>
  );
}
