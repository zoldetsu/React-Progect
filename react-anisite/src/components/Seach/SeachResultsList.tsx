import { iSeach } from "../../types/types";
import classes from "./SeachBar.module.css";
import { useNavigate } from "react-router-dom";

export default function SeachResultList({ results }: iSeach) {
  const router = useNavigate();
  return (
    <div className={classes.SeachList_container}>
      {results.map((result, id) => {
        return (
          <div
            className={classes.result}
            key={id}
            onClick={() => router(`/anime/${result.id}`)}
          >
            {result.title}
          </div>
        );
      })}
    </div>
  );
}
