import { Link } from "react-router-dom";
import classes from "./Auth.module.scss";
import Login from "../../components/Login";

export default function Auth() {
  return (
    <div className={classes.Auth}>
      <div className={classes.auth_container}>
        <div>Login</div>
        <Login />
        <div>
          {" "}
          or <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
}
