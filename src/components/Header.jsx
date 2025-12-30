const Header = () => {
  return (
    <header className="p-4 h-[17vh] text-center flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
        TaskFlow
      </h1>

      <p className="mt-2 max-w-md text-sm sm:text-base text-zinc-400">
        A clean and efficient way to manage your tasks.
      </p>

      <div className="mt-4 h-1 w-16 rounded-full bg-indigo-500" />
    </header>
  );
};

export default Header;
