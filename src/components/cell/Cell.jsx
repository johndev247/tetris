import React from "react";
import {TETROMINOS} from "../../models/tetrominos";
import {StyledCell} from "./cell.style";

const Cell = ({type}) => {
  return <StyledCell type={type} color={TETROMINOS[type].color} />;
};

export default React.memo(Cell);
