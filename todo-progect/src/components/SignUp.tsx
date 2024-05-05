import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { useAppDispatch } from "../hooks/hook";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const despatch = useAppDispatch();
  const navigate = useNavigate();
  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        despatch(
          setUser({ email: user.email, id: user.id, token: user.accessToken })
        );
        navigate("/");
      })

      .catch(console.error);
  };

  return <Form title="Sign up" handleClick={handleRegister} />;
}
