import classes from "../../pages/PesonPage/PersonPage.module.scss";

export default function InfoBlockWall() {
  return (
    <>
      <div className={classes.person_info_container}>
        <div className={classes.button_line}>
          <div className={classes.button}>Активность</div>
          <div className={classes.button}>Избранное</div>
          <div className={classes.button}>Списки</div>
        </div>
      </div>
    </>
  );
}
