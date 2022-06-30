import React from "react";
import BoardElement from "./BoardElement";

const ItemGrid = ({ currentBoard }) => {
  return (
    <>
      <div className="grid grid-cols-5 gap-1 mb-1">
        {currentBoard.map((value, i) => (
          <BoardElement value={value} key={i} />
        ))}
      </div>
    </>
  );
};

export default ItemGrid;
