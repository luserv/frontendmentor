

import { createContext, useContext, useState, ReactNode } from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type FilterType = 'all' | 'active' | 'completed';

interface TodoContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  todos: Todo[];
  inputValue: string;
  filter: FilterType;
  setInputValue: (value: string) => void;
  setFilter: (filter: FilterType) => void;
  toggleTodoComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
  addTodo: () => void;
  clearCompleted: () => void;
  filteredTodos: Todo[];
  activeTodosCount: number;
  setTodos: (todos: Todo[]) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(true);
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Complete online JavaScript course", completed: true },
    { id: 2, text: "Jog around the park 3x", completed: false },
    { id: 3, text: "10 minutes meditation", completed: false },
    { id: 4, text: "Read for 1 hour", completed: false },
    { id: 5, text: "Pick up groceries", completed: false },
    { id: 6, text: "Complete Todo App on Frontend Mentor", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState<FilterType>('all');
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleTodoComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo: Todo = {
        id: Date.now(),
        text: inputValue.trim(),
        completed: false
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  const activeTodosCount = todos.filter(todo => !todo.completed).length;

  const value = {
    darkMode,
    toggleDarkMode,
    todos,
    inputValue,
    filter,
    setInputValue,
    setFilter,
    toggleTodoComplete,
    deleteTodo,
    addTodo,
    clearCompleted,
    filteredTodos,
    activeTodosCount,
    setTodos
  };

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context === undefined) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
}