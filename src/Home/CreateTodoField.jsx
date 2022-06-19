import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");

  const addTodo = (title) => {
    setTodos((prev) => [
      {
        _id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };

  return (
    <div className="field">
      <div className="infield">
        <input
          className="input"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          onKeyPress={(e) => e.key === "Enter" && addTodo(title)}
          placeholder="Add a task"
        />
      </div>
    </div>
  );
};

export default CreateTodoField;
