import classes from "./Input.module.css";

interface MyInput {
  typ: string;
  value: string;
  setInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export default function MyInput({
  typ,
  value,
  setInput,
  placeholder,
}: MyInput) {
  return (
    <div>
      <input
        className={classes.MyInput}
        type={typ}
        value={value}
        onChange={setInput}
        placeholder={placeholder}
      />
    </div>
  );
}
