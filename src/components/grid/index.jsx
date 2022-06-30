// import { MAX_CHALLENGES } from '../../constants/settings'
// import { CompletedRow } from './CompletedRow'
// import { CurrentRow } from './CurrentRow'
// import { EmptyRow } from './EmptyRow'

import Board from "./Board";

const Grid = ({ currentBoard }) => {
  return (
    <>
      <Board currentBoard={currentBoard} />
    </>
  );
};

export default Grid;
