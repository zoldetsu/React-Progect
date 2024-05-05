import "./App.css";

import { Route, Routes } from "react-router-dom";
import Auth from "./Routes/authication/Auth";
import TodoPage from "./Routes/todo/TodoPage";
import RegisterPage from "./Routes/Register/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<TodoPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
