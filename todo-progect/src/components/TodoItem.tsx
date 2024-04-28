import { iTodos } from "../types/types";

interface TodoItem {
  todo: iTodos;
  toggleTodoComplited: Function;
  deleteTodo: Function;
}

export default function TodoItem({
  todo,
  toggleTodoComplited,
  deleteTodo,
}: TodoItem) {
  return (
    <li key={todo.id}>
      <input
        type="checkbox"
        checked={todo.complited}
        onChange={() => toggleTodoComplited(todo.id)}
      />
      <span>{todo.text}</span>
      <span onClick={() => deleteTodo(todo.id)} className={"delete"}>
        &times;
      </span>
    </li>
  );
}
