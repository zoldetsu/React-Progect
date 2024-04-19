import classes from "./MyButton.module.css";

interface MyButton {
  children: string;
}

export default function MyButton({ children }: MyButton) {
  return <div className={classes.MyButton}>{children}</div>;
}
