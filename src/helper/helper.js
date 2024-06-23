const storedValueFun = (value) => {
  const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];

  const newTodo = {
    nameTodo: value.nameTodo,
    date: value.date,
    check: value.check,
  };

  existingTodos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(existingTodos));

  return newTodo;
};

export { storedValueFun };
