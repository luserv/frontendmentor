"use client";
import { TodoProvider, useTodo } from "@/components/intermediate/todo-app/TodoContext";
import Header from "@/components/intermediate/todo-app/Header";
import TodoInput from "@/components/intermediate/todo-app/TodoInput";
import TodoList from "@/components/intermediate/todo-app/TodoList";
import TodoFilter from "@/components/intermediate/todo-app/TodoFilter";
import BackgroundImage from "@/components/intermediate/todo-app/BackgroundImage";

function TodoAppContent() {
  const { darkMode } = useTodo();

  return (
    <div className={`absolute w-screen h-screen ${darkMode ? 'bg-[hsl(235,21%,11%)]' : 'bg-[hsl(0,0%,98%)]'} font-JosefinSans`}>
      <main className="relative h-full">
        <BackgroundImage />

        <div className={`relative left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/3 w-[320px] h-auto`}>
          <Header />
          <TodoInput />
          <TodoList />
          <TodoFilter />
        </div>

        <p className={`absolute bottom-5 right-1/2 translate-x-1/2 mt-8 ${darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]'} text-sm`}>
          Drag and drop to reorder list
        </p>
      </main>
    </div>
  );
}

export default function TodoApp() {
  return (
    <TodoProvider>
      <TodoAppContent />
    </TodoProvider>
  );
}