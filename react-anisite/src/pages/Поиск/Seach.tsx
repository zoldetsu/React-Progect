// import { Link } from "react-router-dom";
import classes from "./Seach.module.css";
import SeachBar from "../../components/Seach/SeachBar";
import SeachResultList from "../../components/Seach/SeachResultsList";
import { useLoading } from "../../hooks/useLoading";
import MyLoader from "../../UI/Loader/MyLoader";
import { useState } from "react";
import { iPosts } from "../../types/types";

export default function Seach() {
  const [loading] = useLoading();
  const [results, setResults] = useState<iPosts[]>([]);

  return (
    <div className={classes.Seach}>
      <h1>Поиск</h1>
      {loading ? (
        <div className={classes.Seach_container}>
          <SeachBar setResults={setResults} results={[]} />
          <SeachResultList results={results} setResults={setResults} />
        </div>
      ) : (
        <MyLoader />
      )}
    </div>
  );
}
