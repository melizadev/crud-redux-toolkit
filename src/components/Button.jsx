const Button = ({
  type = "button",
  onClick,
  disabled = false,
  color = "indigo",
  active = false,
  children,
}) => {
  const colors = {
    indigo: `bg-indigo-600 hover:bg-indigo-500 text-white`,
    gray: `bg-gray-500 hover:bg-gray-400 text-white`,
    red: `bg-red-600 hover:bg-red-500 text-white`,
    zinc: `bg-zinc-700 hover:bg-zinc-600 text-zinc-300`,
  };

  const activeClass = active
    ? "bg-indigo-600 text-white"
    : colors[color] || colors.indigo;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        px-3 py-1 rounded-md text-sm transition cursor-pointer
        ${activeClass}
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {children}
    </button>
  );
};

export default Button;
