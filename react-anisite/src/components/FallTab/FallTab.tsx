import { Link } from "react-router-dom";
import classes from "./FallTab.module.scss";

export default function FallTab() {
  return (
    <div>
      <div className={classes.tab}>
        <div className={classes.tab_container}>
          <Link className={classes.tab_item} to="/person">
            Мой профиль
          </Link>
          <Link className={classes.tab_item} to="/person">
            Настройки
          </Link>
        </div>
      </div>
    </div>
  );
}
