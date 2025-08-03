'use client';

import { useTodo } from './TodoContext';

export default function TodoFilter() {
  const { darkMode, filter, setFilter } = useTodo();

  return (
    <div className={`flex justify-evenly items-center mt-5 ${darkMode ? 'bg-[hsl(235,24%,19%)]' : 'bg-[hsl(0,0%,98%)]'} p-2 rounded-md`}>
      <button 
        className={`${filter === 'all' ? 'text-[hsl(220,98%,61%)]' : (darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]')} ${filter !== 'all' && (darkMode ? 'hover:text-[hsl(234,39%,85%)]' : 'hover:text-[hsl(235,19%,35%)]')} font-bold`}
        onClick={() => setFilter('all')}
      >
        All
      </button>
      <button 
        className={`${filter === 'active' ? 'text-[hsl(220,98%,61%)]' : (darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]')} ${filter !== 'active' && (darkMode ? 'hover:text-[hsl(234,39%,85%)]' : 'hover:text-[hsl(235,19%,35%)]')} font-bold`}
        onClick={() => setFilter('active')}
      >
        Active
      </button>
      <button 
        className={`${filter === 'completed' ? 'text-[hsl(220,98%,61%)]' : (darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]')} ${filter !== 'completed' && (darkMode ? 'hover:text-[hsl(234,39%,85%)]' : 'hover:text-[hsl(235,19%,35%)]')} font-bold`}
        onClick={() => setFilter('completed')}
      >
        Completed
      </button>
    </div>
  );
}