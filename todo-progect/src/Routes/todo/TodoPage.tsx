import { useState } from "react";
import Headers from "../../components/Header/Header";
import InputField from "../../components/InputField";
import TodoList from "../../components/TodoList";
import { useAppDispatch } from "../../hooks/hook";
import { addTodo } from "../../store/todoSlice";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

export default function TodoPage() {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const { isAuth } = useAuth();
  const addTask = () => {
    dispatch(addTodo(text)), setText("");
  };

  return isAuth ? (
    <div className="App">
      <Headers />

      <div className="todo_container">
        <InputField text={text} handleInput={setText} handleSubmit={addTask} />
        <TodoList />
        {/* {post.map((post) => ( 
          <div>{post.title}</div>
        ))} */}
      </div>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
