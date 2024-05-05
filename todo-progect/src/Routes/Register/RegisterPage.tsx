import { Link } from "react-router-dom";
import classes from "./RegisterPage.module.scss";
import SignUp from "../../components/SignUp";

export default function RegisterPage() {
  return (
    <div className={classes.Regsiter}>
      <div className={classes.register_container}>
        <div>Registration</div>
        <SignUp />
        <div>
          {" "}
          or <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
