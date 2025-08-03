'use client';

import { KeyboardEvent, ChangeEvent } from 'react';
import { useTodo } from './TodoContext';

export default function TodoInput() {
  const { darkMode, inputValue, setInputValue, addTodo } = useTodo();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div className={`flex items-center gap-3 w-full px-4 py-4 border mb-4 rounded-md ${darkMode ? 'border-[hsl(237,14%,26%)]' : 'border-[hsl(233,11%,84%)]'} ${darkMode ? 'bg-[hsl(235,24%,19%)]' : 'bg-[hsl(0,0%,98%)]'}`}>
      <div className="relative flex items-center justify-center">
        <div 
        className={`w-5 h-5 rounded-full border ${darkMode ? 'border-[hsl(237,14%,26%)]' : 'border-[hsl(233,11%,84%)]'}`}
        >
        </div>
      </div>
      <input 
        type="text" 
        placeholder="Create a new todo..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className={`w-full focus:outline-none ${darkMode ? 'text-[hsl(0,0%,98%)]' : 'text-[hsl(237,14%,26%)]'}`}
      />
    </div>
  );
}