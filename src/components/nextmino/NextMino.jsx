import React from "react";
import Cell from "../cell/Cell";
import {NextTetroTitle, StyledNextGameBoard} from "./nextmino.style";

const NextMino = ({gameBoard}) => {
  return (
    <>
      <NextTetroTitle>Next</NextTetroTitle>
      <StyledNextGameBoard>
        {gameBoard.map((row) =>
          row.map((cell, i) => <Cell key={i} type={cell[0]} />)
        )}
      </StyledNextGameBoard>
    </>
  );
};

export default NextMino;
