import { Dispatch, SetStateAction, createContext } from "react";
import { iPerson, iPosts } from "../types/types";

interface Icontext {
  isAuth: boolean;
  isAdmin: boolean;
  isPerson: iPerson;
  posts: iPosts[];
  setPosts: Dispatch<SetStateAction<iPosts[]>>;
  setIsAuth: Dispatch<SetStateAction<boolean>>;
  setIsAdmin: Dispatch<SetStateAction<boolean>>;
  setIsPerson: Dispatch<SetStateAction<iPerson>>;
}

export const AuthContext = createContext<Icontext>({} as Icontext);
