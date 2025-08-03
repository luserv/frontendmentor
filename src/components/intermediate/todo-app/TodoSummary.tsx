import { useTodo } from './TodoContext';

export default function TodoSummary() {
  const { darkMode, activeTodosCount, clearCompleted } = useTodo();

  return (
    <div className={`flex justify-between items-center ${darkMode ? 'bg-[hsl(235,24%,19%)]' : 'bg-[hsl(0,0%,98%)]'} px-4 py-3 mt-0`}>
      <span className={`${darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]'} text-sm`}>
        {activeTodosCount} {activeTodosCount === 1 ? 'item' : 'items'} left
      </span>
      <span 
        className={`${darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]'} ${darkMode ? 'hover:text-[hsl(234,39%,85%)]' : 'hover:text-[hsl(235,19%,35%)]'} text-sm cursor-pointer`}
        onClick={clearCompleted}
      >
        Clear Completed
      </span>
    </div>
  );
}