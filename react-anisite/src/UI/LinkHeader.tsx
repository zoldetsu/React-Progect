import { Link } from "react-router-dom";
import classes from "../components/Header/Header.module.css";

interface LinkHeader {
  children: string;
  active: boolean;
  onClick: React.MouseEventHandler<HTMLAnchorElement> | undefined;
  route: string;
}

export default function LinkHeader({
  children,
  active,
  onClick,
  route,
}: LinkHeader) {
  return (
    <Link
      className={
        active ? `${classes.nav_text} ${classes.active}` : classes.nav_text
      }
      onClick={onClick}
      to={route}
    >
      {children}
    </Link>
  );
}
