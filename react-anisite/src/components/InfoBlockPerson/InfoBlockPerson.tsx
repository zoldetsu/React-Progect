import { useNavigate } from "react-router-dom";
import classes from "../../pages/PesonPage/PersonPage.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../context";

export default function InfoBlockPerson() {
  const { isPerson, setIsAuth, setIsAdmin } = useContext(AuthContext);
  const navigate = useNavigate();
  const exitPerson = () => {
    setIsAuth(false);
    setIsAdmin(false);
    navigate("/sign");
  };

  return (
    <>
      <div className={classes.person_basic_container}>
        <div>
          <img
            className={classes.person_avatar}
            src={isPerson.avatar}
            alt="not"
          />
          <div className={classes.namePerson}>{isPerson.name}</div>
          <div>был в cети</div>
          <div>был в cети</div>

          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>
          <div>был в cети</div>

          <div className={classes.exit_button} onClick={exitPerson}>
            <div className={classes.exit_text}>выйти</div>
          </div>
        </div>
      </div>
    </>
  );
}
