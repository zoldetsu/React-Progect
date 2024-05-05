import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";
import { iTodos } from "../types/types";

export default function TodoList({}) {
  const todos: iTodos[] = useAppSelector((state) => state.todos2.todos1);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
