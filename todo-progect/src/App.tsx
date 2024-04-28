import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";

interface iTodos {
  id: string;
  text: string;
  complited: boolean;
}

function App() {
  const [todos, setTodos] = useState([] as iTodos[]);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          complited: false,
        },
      ]);
    }
  };

  const deleteTodo = (todoId: string) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoComplited = (todoId: string) => {
    setTodos(
      todos.filter((todo) => {
        if (todo.id !== todoId) return todo;

        todo.complited = !todo.complited;
        return {
          ...todo,
          complited: !todo.complited,
        };
      })
    );
  };

  return (
    <div className="App">
      <InputField text={text} handleInput={setText} handleSubmit={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodoComplited={toggleTodoComplited}
      />
    </div>
  );
}

export default App;
