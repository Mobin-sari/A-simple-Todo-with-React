import { useEffect, useState } from "react";
import { storedValueFun } from "../helper/helper";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    nameTodo: "",
    date: "",
    check: false,
  });

  const todoHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodos = () => {
    if (todo.nameTodo.length == 0 || todo.date.length == 0) return;
    const storedData = storedValueFun(todo);
    setTodos((prevTodos) => [...prevTodos, storedData]);
  };
  console.log(todos);
  return (
    <div>
      <div>
        <input
          type="text"
          name="nameTodo"
          value={todo.nameTodo}
          onChange={todoHandler}
        />
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={todoHandler}
        />
      </div>
      <div>
        {todos?.map((t, index) => (
          <Todo todo={t} index={index + 1} />
        ))}
      </div>
      <button onClick={addTodos}>Add</button>
    </div>
  );
}
