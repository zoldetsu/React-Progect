import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useAppDispatch } from "../hooks/hook";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";
import { addStorage } from "../utils/localStorages";
export default function SignUp() {
  const despatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        // addStorage(email, password, user.uid, user.refreshToken);
        despatch(
          setUser({ email: user.email, id: user.uid, token: user.refreshToken })
        );
        navigate("/");
      })

      .catch(console.error);
  };

  return <Form title="Sign up" handleClick={handleRegister} />;
}
