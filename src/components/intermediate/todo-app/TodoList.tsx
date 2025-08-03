import { useTodo } from './TodoContext';
import TodoItem from './TodoItem';
import TodoSummary from './TodoSummary';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from '@dnd-kit/sortable';

export default function TodoList() {
  const { darkMode, filteredTodos, setTodos, todos } = useTodo();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = todos.findIndex((todo) => todo.id === active.id);
      const newIndex = todos.findIndex((todo) => todo.id === over.id);
      setTodos(arrayMove(todos, oldIndex, newIndex));
    }
  }

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={todos.map(todo => todo.id)} strategy={verticalListSortingStrategy}>
        <div className={`flex flex-col justify-between items-center ${darkMode ? 'bg-[hsl(235,24%,19%)]' : 'bg-[hsl(0,0%,98%)]'} rounded-md overflow-hidden`}>
          {filteredTodos.map((todo) => (
            <TodoItem 
              key={todo.id} 
              id={todo.id} 
              text={todo.text} 
              completed={todo.completed} 
            />
          ))}
          <TodoSummary />
        </div>
      </SortableContext>
    </DndContext>
  );
}