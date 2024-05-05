import { useAppSelector } from "./hook";
import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id } = useAppSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
