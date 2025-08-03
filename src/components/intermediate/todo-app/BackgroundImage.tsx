import Image from "next/image";
import { useTodo } from './TodoContext';

export default function BackgroundImage() {
  const { darkMode } = useTodo();

  return (
    <>
      <Image
        src="/intermediate/todo-app/images/bg-desktop-dark.jpg"
        alt="bg-desktop-dark"
        width={375}
        height={200}
        className={`absolute hidden md:block md:top-0 md:w-full md:h-auto ${darkMode ? 'md:block' : 'md:hidden'}`}
      />

      <Image
        src="/intermediate/todo-app/images/bg-desktop-light.jpg"
        alt="bg-desktop-light"
        width={375}
        height={200}
        className={`absolute hidden md:block md:top-0 md:w-full md:h-auto ${!darkMode ? 'md:block' : 'md:hidden'}`}
      />

      <Image
        src="/intermediate/todo-app/images/bg-mobile-dark.jpg"
        alt="bg-mobile-dark"
        width={375}
        height={200}
        className={`absolute top-0 w-full h-auto md:hidden ${darkMode ? 'block' : 'hidden'}`}
      />

      <Image
        src="/intermediate/todo-app/images/bg-mobile-light.jpg"
        alt="bg-mobile-light"
        width={375}
        height={200}
        className={`absolute top-0 w-full h-auto md:hidden ${!darkMode ? 'block' : 'hidden'}`}
      />
    </>
  );
}