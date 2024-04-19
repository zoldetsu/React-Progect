import classes from "./Header.module.css";

import LinkHeader from "../../UI/LinkHeader";
import { useContext, useEffect, useState } from "react";
import useScroll from "../../hooks/useScroll";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../context";
import { HeaderRouters } from "../../router";
import FallTab from "../FallTab/FallTab";

export default function Headers() {
  const [active, setActive] = useState("/anime");
  const scrolled = useScroll();
  const { isPerson, isAuth, isAdmin } = useContext(AuthContext);
  const { pathname } = useLocation();
  const [tab, setTab] = useState<boolean>(false);

  useEffect(() => {
    setActive(pathname);
    setTab(false);
  }, [pathname]);

  const tabview = () => {
    if (tab === false) {
      setTab(true);
    } else {
      setTab(false);
    }
  };

  return (
    <div>
      <div
        className={
          scrolled ? `${classes.header} ${classes.scroll}` : classes.header
        }
      >
        <div className={classes.header_line}>
          <div>
            <Link className={classes.logo_text} to="/anime">
              AniCorn
            </Link>
          </div>
          <nav className={classes.nav_line}>
            {HeaderRouters.map((router, index) => (
              <LinkHeader
                key={index}
                route={router.path}
                active={active === router.path}
                onClick={() => {
                  setActive(pathname);
                }}
              >
                {router.name}
              </LinkHeader>
            ))}

            {isAdmin && (
              <LinkHeader
                route={"/admin"}
                active={active === "/admin"}
                onClick={() => {
                  setActive(pathname);
                }}
              >
                Добавить пост
              </LinkHeader>
            )}
          </nav>
          <div className={classes.navSeachEnter}>
            <div>
              <Link to={"/seach"} className={classes.logo_enter}>
                Поиск
              </Link>
            </div>

            {isAuth ? (
              <div className={classes.logo_enter} onClick={tabview}>
                {isPerson.name}
              </div>
            ) : (
              <div>
                <Link to={"/sign"} className={classes.logo_enter}>
                  вход
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {tab && isAuth && <FallTab />}
    </div>
  );
}
