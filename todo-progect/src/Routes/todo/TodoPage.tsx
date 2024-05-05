import { useEffect, useState } from "react";
import Headers from "../../components/Header/Header";
import InputField from "../../components/InputField";
import TodoList from "../../components/TodoList";
import { useAppDispatch } from "../../hooks/hook";
import { addTodo } from "../../store/todoSlice";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";

type iPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default function TodoPage() {
  const [text, setText] = useState("");
  const [post, setPost] = useState<iPost[]>([] as iPost[]);
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  const addTask = () => {
    dispatch(addTodo(text)), setText("");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await response.json();
      setPost(result);
    };

    fetchData();
  }, []);
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
