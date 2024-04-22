import classes from "./Wall.module.scss";

export default function Wall({ active }) {
  return (
    <div
      className={active ? `${classes.Wall} ${classes.active}` : classes.Wall}
    >
      <div className="container">
        <div className="линия сортировки и правил"></div>
        <div className="контейнер с коментированием">
          <div>
            <div className="аватарка"></div>
            <div className="что нового"></div>
          </div>
          <div className="смайл гиф отправить контейнер">
            <div>смайл</div>
            <div>гиф</div>
            <div>отправить</div>
          </div>
        </div>
      </div>
    </div>
  );
}
