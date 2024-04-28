import { iTodos } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoItem {
  todos: iTodos[];
  toggleTodoComplited: Function;
  deleteTodo: Function;
}

export default function TodoList({
  todos,
  toggleTodoComplited,
  deleteTodo,
}: TodoItem) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          toggleTodoComplited={toggleTodoComplited}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}
