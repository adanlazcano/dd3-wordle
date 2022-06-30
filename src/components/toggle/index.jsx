import classnames from "classnames";

const Toggle = ({ flag, handleFlag }) => {
  const toggleHolder = classnames(
    "w-12 h-6 flex shrink-0 items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out cursor-pointer",
    {
      "bg-green-400": flag,
    }
  );
  const toggleButton = classnames(
    "bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out cursor-pointer",
    {
      "translate-x-6": flag,
    }
  );
  return (
    <>
      <div className="text-gray-500 dark:text-gray-300 text-left">
        <p className="leading-none">{""}</p>
      </div>
      <div className={toggleHolder} onClick={() => handleFlag(!flag)}>
        {/*  */}
        <div className={toggleButton} />
      </div>
    </>
  );
};

export default Toggle;
