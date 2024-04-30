import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { iTodos } from "../types/types";

export default function TodoList({}) {
  const todos: iTodos[] = useSelector((state) => state.todos2.todos1);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
