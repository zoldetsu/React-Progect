import { useParams } from "react-router-dom";
import classes from "./TitleView.module.css";
import { useLoading } from "../../hooks/useLoading";
import MyLoader from "../../UI/Loader/MyLoader";
import { useContext } from "react";
import { AuthContext } from "../../context";

export default function TitleView() {
  const { id } = useParams();
  const [loading] = useLoading();
  const { posts } = useContext(AuthContext);
  const result = posts.find(
    (anime: { id: number }) => anime.id === (id ? parseInt(id) : 0)
  );

  return (
    <div className={classes.animeView}>
      {loading ? (
        <div>
          {result ? (
            <div className={classes.view_container}>
              <img src={result.path} alt="" />
              <div className={classes.text_block}>
                <div className={classes.text_title}>{result.title}</div>
                <p className={classes.status}>{result.status}</p>

                <div>
                  <h1 className={classes.discription}>описание</h1>
                  <div className={classes.discription_text}>
                    {result.describtion}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>Аниме с id {id} не найдено</div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "15%",
            justifyContent: "center",
          }}
        >
          <MyLoader />
        </div>
      )}
    </div>
  );
}
