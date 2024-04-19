import MyLoader from "../../UI/Loader/MyLoader";
import { useLoading } from "../../hooks/useLoading";
import classes from "./DoramaPage.module.css";

export default function DoramaPage() {
  const [loading] = useLoading();

  return (
    <div className={classes.DoramaPage}>
      {loading ? (
        <div className="container">
          <h1>ПОКА НЕТ</h1>
        </div>
      ) : (
        <MyLoader />
      )}
    </div>
  );
}
