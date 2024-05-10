import { useState } from "react";
import classes from "./Form.module.scss";
type Form = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export default function Form({ title, handleClick }: Form) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className={classes.form}>
      <input
        className={classes.input}
        value={email}
        type="Email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        className={classes.input}
        value={pass}
        type="Password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button
        className={classes.button}
        onClick={() => handleClick(email, pass)}
      >
        {title}
      </button>
    </div>
  );
}
