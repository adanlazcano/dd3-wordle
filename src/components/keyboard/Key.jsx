const Key = ({ value, text, children, onClick }) => {
  const handleClick = (e) => {
    onClick(value);
  };
  return (
    <button
      onClick={handleClick}
      className="flex w-40 h-10 items-center text-xs justify-center rounded mx-0.5 font-bold cursor-pointer select-none dark:text-white bg-slate-200 dark:bg-slate-600 hover:bg-slate-300 active:bg-slate-400"
    >
      {text || children}
    </button>
  );
};

export default Key;
