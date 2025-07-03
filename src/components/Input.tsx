import { useState, type FormEvent } from "react";
import type { Todo } from "../types/todo";

type InputProps = {
  createTodo: (todo: Todo) => string;
};

const Input: React.FC<InputProps> = ({ createTodo }) => {
  const [inputText, setInputText] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!inputText.trim()) return;

    const todo: Todo = {
      text: inputText,
      id: Date.now().toString(),
      completed: false,
    };
    createTodo(todo);
    setInputText("");
  }

  return (
    <form
      className="w-full max-w-3xl mx-auto mt-6 sm:mt-8 lg:mt-10 px-3 sm:px-4 lg:px-6 animate-in fade-in duration-500"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center w-full overflow-hidden rounded-full bg-input shadow-lg ring-1 ring-ring focus-within:ring-2 focus-within:ring-primary/50 transition-all duration-300 border border-border">
        <input
          type="text"
          placeholder="Add your sweet little todo..."
          className="flex-grow px-3 sm:px-4 lg:px-6 py-2.5 sm:py-3 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none text-sm sm:text-base lg:text-lg font-mono min-w-0"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          type="submit"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80 px-3 sm:px-4 lg:px-6 py-2.5 sm:py-[14px] rounded-none rounded-r-full transition-all duration-300 active:scale-95 font-medium text-sm sm:text-base whitespace-nowrap shrink-0"
        >
          <span className="hidden sm:inline">Add Todo</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>
    </form>
  );
};

export default Input;
