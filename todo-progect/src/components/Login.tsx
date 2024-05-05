import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useAppDispatch } from "../hooks/hook";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

type IUser = {
  id: string;
  email: string;
  accessToken: string;
};

export default function Login() {
  const despatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        despatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/");
      })
      .catch(console.error);
  };
  return <Form title="Sign in" handleClick={handleLogin} />;
}
