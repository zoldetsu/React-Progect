import classes from "./Headers.module.scss";
import { useDispatch } from "react-redux";
import { removeUser } from "../../store/userSlice";
export default function Headers() {
  const dispatch = useDispatch();

  const HandleRemove = () => {
    dispatch(removeUser());
  };

  return (
    <div className={classes.Headers}>
      <div className={classes.header_line}>
        <h1>Todo</h1>
        <button className={classes.button} onClick={() => HandleRemove()}>
          log out
        </button>
      </div>
    </div>
  );
}
