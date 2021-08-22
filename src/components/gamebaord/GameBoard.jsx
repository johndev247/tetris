import React from "react";
import Cell from "../cell/Cell";
import DownKey from "../softKeys/DownKey";
import UpKey from "../softKeys/UpKey";
import LeftKey from "../softKeys/LeftKey";
import RightKey from "../softKeys/RightKey";
import {StyledGameBoard} from "./gameboard.style";
import {DisplayText, BoardDisplay} from "../display/display.style";

const GameBoard = ({
  gameBoard,
  softKeyUp,
  softKeyLeft,
  softKeyRight,
  softKeyDown,
  softMouseUp,
  softMouseUpKey,
  gameOver,
  paused,
}) => {
  return (
    <StyledGameBoard width={gameBoard[0].length} height={gameBoard.length}>
      {gameBoard.map((row) =>
        row.map((cell, i) => <Cell key={i} type={cell[0]} />)
      )}
      <BoardDisplay show={gameOver || paused}>
        <DisplayText>{gameOver ? "Game Over" : paused && "Paused"}</DisplayText>
      </BoardDisplay>
      <UpKey callback={softKeyUp} softMouseUpKey={softMouseUpKey} />
      <LeftKey callback={softKeyLeft} />
      <RightKey callback={softKeyRight} />
      <DownKey callback={softKeyDown} softMouseUp={softMouseUp} />
    </StyledGameBoard>
  );
};

export default GameBoard;
