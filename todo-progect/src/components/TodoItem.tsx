import { useAppDispatch } from "../hooks/hook";
import { iTodos } from "../types/types";
import { deleteTodo, toggleTodoComplited } from "../store/todoSlice";
import classes from "./TodoItem.module.scss";
interface TodoItem {
  todo: iTodos;
  toggleTodoComplited: Function;
  deleteTodo: Function;
}

export default function TodoItem({ id, text, completed }: iTodos) {
  const dispatch = useAppDispatch();

  return (
    <li key={id} className={classes.li}>
      <input
        className={classes.input}
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodoComplited(id))}
      />
      <span>{text}</span>
      <span onClick={() => dispatch(deleteTodo(id))} className={classes.delete}>
        &times;
      </span>
    </li>
  );
}
