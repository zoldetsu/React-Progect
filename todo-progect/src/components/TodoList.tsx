import { useAppSelector } from "../hooks/hook";
import TodoItem from "./TodoItem";
import { iTodos } from "../types/types";
import { accounts } from "../../todo-ls";
import { useAuth } from "../hooks/use-auth";
import { useEffect, useState } from "react";

export default function TodoList() {
  const [task, setTask] = useState([] as iTodos[]);
  const { email } = useAuth();
  const todos: iTodos[] = useAppSelector((state) => state.todos2.todos1);

  const acc = accounts.find((account) => account.email === email);

  useEffect(() => {
    if (acc) {
      setTask([...acc.tasks, ...todos]);
    }
  }, [acc]);
  console.log(task);
  return (
    <ul>
      {task.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
}
