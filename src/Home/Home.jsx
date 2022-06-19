import React, { useState } from "react";
import TodoItem from "./Item/TodoItem";
import CreateTodoField from "./CreateTodoField";

const data = [
  {
    _id: "23",
    title: "Your first task",
    isCompleted: false,
  },
  {
    _id: "24",
    title: "Your second task",
    isCompleted: false,
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);
  const chk = document.getElementById(".check");

  const changeTodo = (id) => {
    const copy = [...todos];
    // console.log(copy);
    const current = copy.find((t) => t._id === id);
    // console.log(current);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  // console.log(todos);
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t._id != id));
  };

  return (
    <div className="Home">
      <div className="all">
        <div className="Uptext">This is your TODO list</div>
        {todos.map((todo) => (
          <div className="layout">
            <TodoItem
              key={todo._id}
              todo={todo}
              className="text-blue-900"
              changeTodo={changeTodo}
              removeTodo={removeTodo}
            />
          </div>
        ))}
        <CreateTodoField setTodos={setTodos} />
      </div>
    </div>
  );
};
export default Home;
