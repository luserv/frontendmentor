import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <div className="flex justify-between items-center px-2 mb-8">
      <h1 className="text-white font-bold text-2xl tracking-widest">TODO</h1>
      <ThemeToggle />
    </div>
  );
}