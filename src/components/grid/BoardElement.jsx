import React from "react";

const BoardElement = ({ value }) => {
  return (
    <>
      <div className="w-20 h-20 border-solid border-2 flex items-center justify-center  text-4xl font-bold rounded dark:text-white bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-600">
        <div className="letter-container"></div>
        {value}
      </div>
    </>
  );
};

export default BoardElement;
