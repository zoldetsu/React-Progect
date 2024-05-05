import classes from "./InputField.module.scss";

interface InputField {
  text: string;
  handleInput: (str: string) => void;
  handleSubmit: () => void;
}

export default function InputField({
  text,
  handleInput,
  handleSubmit,
}: InputField) {
  return (
    <label className={classes.container}>
      <input
        className={classes.inputField}
        value={text}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button className={classes.button} onClick={handleSubmit}>
        Add Todo
      </button>
    </label>
  );
}
