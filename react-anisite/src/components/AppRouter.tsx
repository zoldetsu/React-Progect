import { useContext } from "react";
import { personRoutes, privateRoutes, publicRoutes } from "../router/index";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context";

export default function AppRouter() {
  const { isAuth, isAdmin } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth &&
        !isAdmin &&
        personRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}

      {isAuth &&
        isAdmin &&
        privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}

      {!isAuth &&
        !isAdmin &&
        publicRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element}></Route>
        ))}
    </Routes>
  );
}
