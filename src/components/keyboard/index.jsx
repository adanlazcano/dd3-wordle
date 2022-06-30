import React, { useContext } from "react";
import MainContext from "../../context/MainContext";
import Key from "./Key";
import { BackspaceIcon } from "@heroicons/react/outline";
import { MAX_LENGTH_BOARD } from "../../constants";

const Keyboard = ({ setCurrentBoard, currentBoard }) => {
  const { indexBoard, setIndexBoard } = useContext(MainContext);

  const onClick = (e) => {
    if (indexBoard <= MAX_LENGTH_BOARD) {
      const updateAreas = [...currentBoard];
      updateAreas[indexBoard] = e === "DELETE" ? "" : e;
      setCurrentBoard(updateAreas);
      setIndexBoard((prev) => prev + 1);
    }
  };
  return (
    <div className="bg-slate-50 dark:bg-slate-800 w-full rounded-xl p-6 mb-5">
      <div className="flex justify-center pl-8 mb-1">
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((key) => (
          <Key value={key} text={key} key={key} onClick={onClick} />
        ))}
      </div>
      <div className="flex justify-start pl-8 ml-10 mb-1">
        {["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"].map((key) => (
          <Key value={key} key={key} text={key} onClick={onClick} />
        ))}
      </div>
      <div className="flex justify-start pl-1">
        <Key width={65.4} value="ENTER" text="ENTER" onClick={onClick}></Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((key) => (
          <Key value={key} key={key} text={key} onClick={onClick} />
        ))}
        <Key width={65.4} onClick={onClick} value="DELETE">
          <BackspaceIcon className="w-6" />
        </Key>
      </div>
    </div>
  );
};

export default Keyboard;
