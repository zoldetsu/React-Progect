import { useAppDispatch } from "../hooks/hook";
import { setUser } from "../store/userSlice";

export function addStorage(
  login: string,
  password: string,
  id: string,
  token: string
) {
  localStorage.setItem(
    "account",
    JSON.stringify(
      { login: login, password: password, id: id, token: token } || null
    )
  );
}

export function getStorage() {
  const dispatch = useAppDispatch();
  const accountJson = localStorage.getItem("account");
  if (accountJson) {
    const account = JSON.parse(accountJson);
    if (account) {
      dispatch(
        setUser({ email: account.login, id: account.id, token: account.token })
      );
      return account;
    } else {
      // Обработка случая, когда parse вернул не объект
      console.error("Parsed account is not an object");
      return null;
    }
  } else {
    return null;
  }
}
