import React from "react";
import { BsBookmarkCheck, BsFillXSquareFill } from "react-icons/bs";
import Check from "./Check";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="main">
      <button className="container" onClick={() => changeTodo(todo._id)}>
        <div className="common">
          <Check isCompleted={todo.isCompleted} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: " &nbsp &nbsp" }} />
        {todo.title}
      </button>
      <button className="trash" onClick={() => removeTodo(todo._id)}>
        <BsFillXSquareFill size={12} />
      </button>
    </div>
  );
};

export default TodoItem;
