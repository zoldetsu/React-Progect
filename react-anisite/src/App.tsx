import Headers from "./components/Header/Headers";
import "./index.css";
import AppRouter from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { AuthContext } from "./context";
import { useState } from "react";
import { AnimeTitle } from "./poster";
import { iPerson, iPosts } from "./types/types";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isPerson, setIsPerson] = useState<iPerson>({} as iPerson);
  const [posts, setPosts] = useState<iPosts[]>(AnimeTitle);

  return (
    <div>
      <AuthContext.Provider
        value={{
          posts,
          isAuth,
          isAdmin,
          isPerson,
          setPosts,
          setIsAuth,
          setIsAdmin,
          setIsPerson,
        }}
      >
        <BrowserRouter>
          <Headers />
          <AppRouter />
        </BrowserRouter>
      </AuthContext.Provider>
    </div>
  );
}
export default App;
