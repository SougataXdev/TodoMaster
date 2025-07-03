import { useState } from "react";
import Input from "./components/Input";
import type { Todo } from "./types/todo";
import "./index.css";
import TodoList from "./components/TodoList";
import Header from "./components/Header";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? (JSON.parse(storedTodos) as Todo[]) : [];
  });

  function createTodo({ id, text, completed }: Todo): string {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, { id, text, completed }];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
    return `Todo: ${text} (ID: ${id}) created`;
  }

  function toggleTodo(id: string) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function deleteTodo(id: string): void {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  return (
    <div className="bg-background w-full min-h-screen flex justify-center items-start py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col justify-center w-full max-w-3xl space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
        <Header />
        <Input createTodo={createTodo} />
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;
