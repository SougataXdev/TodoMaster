import React from "react";
import type { Todo } from "../types/todo";
import { Circle, CircleCheck, Trash } from "lucide-react";

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  deleteTodo,
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-6 px-4">
      {todos.length === 0 ? (
        <p className="text-muted-foreground font-mono text-center animate-in fade-in">
          No todos yet
        </p>
      ) : (
        <ul className="space-y-3 animate-in fade-in slide-in-from-bottom-6 duration-500">
          {todos.map((todo, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between p-4 rounded-2xl bg-card shadow-md border border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="transition-transform hover:scale-110"
                >
                  {todo.completed ? (
                    <CircleCheck className="text-primary" />
                  ) : (
                    <Circle className="text-muted-foreground" />
                  )}
                </button>
                <span
                  className={`font-mono font-semibold text-base ${
                    todo.completed
                      ? "line-through text-muted-foreground"
                      : "text-foreground"
                  }`}
                >
                  {todo.text}
                </span>
              </div>
              <button
                className="text-destructive hover:scale-110 transition-transform"
                onClick={() => deleteTodo(todo.id)}
              >
                <Trash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
