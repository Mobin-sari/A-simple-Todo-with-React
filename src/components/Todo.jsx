export default function Todo({ todo, index }) {
  console.log(todo);
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Todo</th>
          <th>Date</th>
          <th>Check</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{index}</td>
          <td>{todo.nameTodo}</td>
          <td>{todo.date}</td>
          <td>{todo.check}</td>
        </tr>
      </tbody>
    </table>
  );
}
