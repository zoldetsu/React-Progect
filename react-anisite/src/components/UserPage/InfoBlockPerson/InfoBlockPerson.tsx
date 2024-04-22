import classes from "./InfoPerson.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../context";

export default function InfoBlockPerson() {
  const { isPerson } = useContext(AuthContext);

  return (
    <>
      <div>
        <div className={classes.person_basic_container}>
          <img
            className={classes.person_avatar}
            src={isPerson.avatar}
            alt="not"
          />
          <div className={classes.namePerson}>{isPerson.name}</div>
          <div>был в cети</div>

          <div className={classes.section_info}>
            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>друзей</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>рейтинг</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>комментарии</div>
            </div>

            <div className={classes.section_item}>
              <div className={classes.number}>0</div>
              <div className={classes.text}>аниме</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
