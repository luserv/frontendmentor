import { memo } from 'react';
import IconCross from "./images/icon-cross.svg";
import { useTodo } from './TodoContext';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem = memo(function TodoItem({ id, text, completed }: TodoItemProps) {
  const { darkMode, toggleTodoComplete, deleteTodo } = useTodo();
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  console.log(`Rendering TodoItem: ${text}`);

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className={`flex items-center justify-between w-full py-3 px-4 border-b ${darkMode ? 'border-[hsl(237,14%,26%)]' : 'border-[hsl(233,11%,84%)]'}`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center">
            <input 
              type="checkbox" 
              checked={completed}
              onChange={() => toggleTodoComplete(id)}
              className={`appearance-none w-5 h-5 rounded-full border ${darkMode ? 'border-[hsl(237,14%,26%)]' : 'border-[hsl(233,11%,84%)]'} checked:bg-gradient-to-r from-[hsl(192,100%,67%)] to-[hsl(280,87%,65%)] cursor-pointer`} 
            />
            {completed && (
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" className="absolute pointer-events-none">
                <path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/>
              </svg>
            )}
          </div>
          <label 
            className={`${completed ? (darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(233,11%,84%)]') : (darkMode ? 'text-[hsl(234,39%,85%)]' : 'text-[hsl(235,19%,35%)]')} ${completed ? 'line-through' : ''}`}
          >
            {text}
          </label>
        </div>
        <div>
          <IconCross 
            className={`w-5 h-5 ${darkMode ? 'text-[hsl(233,14%,35%)]' : 'text-[hsl(236,9%,61%)]'} ${darkMode ? 'hover:text-[hsl(234,39%,85%)]' : 'hover:text-[hsl(235,19%,35%)]'} cursor-pointer`} 
            onClick={() => deleteTodo(id)}
          />
        </div>
      </div>
    </div>
  );
});

export default TodoItem;