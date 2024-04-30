import { useDispatch } from "react-redux";
import { iTodos } from "../types/types";
import { deleteTodo, toggleTodoComplited } from "../store/todoSlice";

interface TodoItem {
  todo: iTodos;
  toggleTodoComplited: Function;
  deleteTodo: Function;
}

export default function TodoItem({ id, text, completed }: iTodos) {
  const dispatch = useDispatch();

  const removeTodo = () => {
    dispatch(deleteTodo(id));
  };
  return (
    <li key={id}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplited({ id }))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(deleteTodo({ id }))} className={"delete"}>
        &times;
      </span>
    </li>
  );
}
