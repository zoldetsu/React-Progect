import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useAppDispatch } from "../hooks/hook";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";
import { addStorage } from "../utils/localStorages";
import { getStorage } from "../utils/localStorages";
import { useEffect } from "react";

type IUser = {
  id: string;
  email: string;
  accessToken: string;
};

export default function Login() {
  const despatch = useAppDispatch();
  const navigate = useNavigate();
  const accd = getStorage();
  // useEffect(() => {
  //   if (accd) {
  //     const auth = getAuth();
  //     signInWithEmailAndPassword(auth, accd.login, accd.password)
  //       .then(({ user }) => {
  //         console.log(user.uid);
  //         despatch(
  //           setUser({
  //             email: user.email,
  //             id: user.uid,
  //             token: user.refreshToken,
  //           })
  //         );
  //         navigate("/");
  //       })
  //       .catch(console.error);
  //   } else {
  //     navigate("/login");
  //   }
  // }, [accd]);

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        addStorage(email, password, user.uid, user.refreshToken);
        despatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return <Form title="Sign in" handleClick={handleLogin} />;
}
