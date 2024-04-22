import MyInput from "../../UI/Input/MyInput";
import classes from "./Sign.module.scss";
import MyLoader from "../../UI/Loader/MyLoader";
import { useLoading } from "../../hooks/useLoading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { SignRouter } from "./SignRouter";
import { iPerson } from "../../types/types";

export default function Sign() {
  const [sign, setSign] = useState({ login: "", password: "" });
  const [loading] = useLoading();
  const [errorAuth, setErrorAuth] = useState(false);
  const { setIsAuth, setIsAdmin, setIsPerson, isAuth, isAdmin } =
    useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/anime");
    } else {
      navigate("/sign");
    }
  }, [isAuth, isAdmin]);

  const handleVerify = () => {
    let results: iPerson[] = SignRouter({
      person: sign.login,
      verf: sign.password,
    });
    setIsPerson(results[0]);

    if (results.length !== 0) {
      setIsAuth(true);
      setErrorAuth(false);
    } else {
      setErrorAuth(true);
    }
    if (results[0].admin) {
      setIsAdmin(true);
    }
    setSign({ ...sign, login: "", password: "" });
  };
  return (
    <div className={classes.sign}>
      {loading ? (
        <div className={classes.sign_container}>
          <h1>Добро пожаловать</h1>
          <div className={classes.input}>
            <MyInput
              placeholder="Логин"
              typ="text"
              value={sign.login}
              setInput={(e) => setSign({ ...sign, login: e.target.value })}
            />
          </div>

          <div className={classes.input}>
            <MyInput
              placeholder="Пароль"
              typ="password"
              value={sign.password}
              setInput={(e) => setSign({ ...sign, password: e.target.value })}
            />
          </div>

          <div onClick={handleVerify} className={classes.sign_button}>
            <div className={classes.sign_text}>Войти</div>
          </div>

          {errorAuth && <h1>ошибка авторизации</h1>}
        </div>
      ) : (
        <MyLoader />
      )}
    </div>
  );
}
