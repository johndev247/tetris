import {useCallback, useState} from "react";
import {GAME_BOARD_WIDTH, NEXT_TETRO_BOARD_WIDTH} from "../models/gameHelpers";
import {nextTetromino, TETROMINOS, randomTetromino} from "../models/tetrominos";
import checkCollision from "../utils/checkCollision";

export const useTetro = () => {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);

  if (nextTetromino.length < 1) {
    randomTetromino();
  }
  var nextTetroMino = nextTetromino[next];
  const [tetro, setTetro] = useState({
    pos: {x: 0, y: 0},
    tetromino: TETROMINOS[0].shape,
    collided: false,
  });

  const rotate = (matrix, dir) => {
    const rotatedTetro = matrix.map((_, index) =>
      matrix.map((col) => col[index])
    );
    if (dir > 0) return rotatedTetro.map((row) => row.reverse());
    return rotatedTetro.reverse();
  };

  const rotateTetro = (board, dir) => {
    const clonedTetro = JSON.parse(JSON.stringify(tetro));
    clonedTetro.tetromino = rotate(clonedTetro.tetromino, dir);

    const pos = clonedTetro.pos.x;
    let offset = 1;
    while (checkCollision(clonedTetro, board, {x: 0, y: 0})) {
      clonedTetro.pos.x += offset;
      offset = -(offset + (offset > 0 ? 1 : -1));
      if (offset > clonedTetro.tetromino[0].length) {
        rotate(clonedTetro.tetromino, -dir);
        clonedTetro.pos.x = pos;
        return;
      }
    }
    setTetro(clonedTetro);
  };

  const [NextTetro, setNextTetro] = useState({
    pos: {x: NEXT_TETRO_BOARD_WIDTH / 2 - 2, y: 0},
    tetromino: nextTetroMino.shape,
    collided: false,
  });
  const updateTetroPos = ({x, y, collided}) => {
    setTetro((prev) => ({
      ...prev,
      pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
      collided,
    }));
  };

  const resetNextTetro = useCallback(() => {
    setNextTetro({
      pos: {x: 0, y: 0},
      tetromino: nextTetroMino.shape,
      collided: false,
    });
  }, [nextTetroMino]);

  const resetTetro = useCallback(() => {
    setTetro({
      pos: {x: GAME_BOARD_WIDTH / 2 - 2, y: 0},
      tetromino: nextTetromino[current].shape,
      collided: false,
    });
    resetNextTetro();
    randomTetromino();
    setCurrent(current + 1);
    setNext(next + 1);
  }, [current, next, resetNextTetro]);

  return [
    tetro,
    nextTetroMino,
    updateTetroPos,
    resetTetro,
    NextTetro,
    resetNextTetro,
    rotateTetro,
  ];
};
