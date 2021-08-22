import {useEffect, useState} from "react";
import {createGameBoard, createNextTetroBoard} from "../models/gameHelpers";

export const useBoard = (tetro, NextTetro, resetTetro, resetNextTetro) => {
  const [board, setBoard] = useState(createGameBoard());
  const [nextBoard, setNextBoard] = useState(createNextTetroBoard());
  const [rowsCleared, setRowsCleareed] = useState(0);

  useEffect(() => {
    setRowsCleareed(0);

    const sweepRows = (newBoard) =>
      newBoard.reduce((acm, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleareed((prev) => prev + 1);
          acm.unshift(new Array(newBoard[0].length).fill([0, "clear"]));
          return acm;
        }
        acm.push(row);
        return acm;
      }, []);
    const updateBoard = (prev) => {
      const newBoard = prev.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      tetro.tetromino.forEach((row, y) =>
        row.forEach((value, x) => {
          if (value !== 0) {
            newBoard[y + tetro.pos.y][x + tetro.pos.x] = [
              value,
              `${tetro.collided ? "Merged" : "clear"}`,
            ];
          }
        })
      );
      if (tetro.collided) {
        resetTetro();
        return sweepRows(newBoard);
      }
      return newBoard;
    };
    setBoard((prev) => updateBoard(prev));
  }, [tetro, resetTetro]);

  useEffect(() => {
    const updateNextBoard = (prev) => {
      const newNextBoard = prev.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );
      NextTetro.tetromino.forEach((row, y) =>
        row.forEach((value, x) => {
          if (value !== 0) {
            newNextBoard[y + NextTetro.pos.y][x + NextTetro.pos.x] = [
              value,
              `${NextTetro.collided ? "Merged" : "clear"}`,
            ];
          }
        })
      );
      if (NextTetro.collided) {
        resetNextTetro();
      }
      return newNextBoard;
    };
    setNextBoard((prev) => updateNextBoard(prev));
  }, [NextTetro, resetTetro, resetNextTetro]);
  return [board, setBoard, nextBoard, rowsCleared];
};
