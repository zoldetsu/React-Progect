import { useState } from "react";

type Form = {
  title: string;
  handleClick: (email: string, password: string) => void;
};

export default function Form({ title, handleClick }: Form) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div>
      <input
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        value={pass}
        type="password"
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>{title}</button>
    </div>
  );
}
