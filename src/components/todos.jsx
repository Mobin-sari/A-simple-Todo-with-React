import { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    nameTodo: "",
    date: "",
    check: false,
  });

  const todoNameHandler = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({
      ...prevTodo,
      [name]: value,
    }));
  };

  const addTodos = () => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };
  console.log(todos);
  return (
    <div>
      <div>
        <input
          type="text"
          name="nameTodo"
          value={todo.nameTodo}
          onChange={todoNameHandler}
        />
        <input
          type="date"
          name="date"
          value={todo.date}
          onChange={todoNameHandler}
        />
      </div>
      <div>
        {todos?.map((t, index) => (
          <div key={index}>
            <p>{t.nameTodo}</p>
            <p>{t.date}</p>
          </div>
        ))}
      </div>
      <button onClick={addTodos}>add</button>
    </div>
  );
}
