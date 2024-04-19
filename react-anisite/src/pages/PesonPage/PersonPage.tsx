import { useContext } from "react";
import { AuthContext } from "../../context";
import classes from "./PersonPage.module.scss";
import InfoBlockPerson from "../../components/InfoBlockPerson/InfoBlockPerson";
import InfoBlockWall from "../../components/InfoBlockWall/InfoBlockWall";
import InfoBlockFriends from "../../components/InfoBlockFriends/InfoBlockFriends";

export default function PersonPage() {
  const { isPerson } = useContext(AuthContext);

  return (
    <div className={classes.Person}>
      <img className={classes.person_banner} src={isPerson.banner} alt="" />
      <div className={classes.PersonPage}>
        <div className={classes.person_container}>
          <InfoBlockPerson />
          <InfoBlockWall />
          <InfoBlockFriends />
        </div>
      </div>
    </div>
  );
}
