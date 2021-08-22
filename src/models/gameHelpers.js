export const GAME_BOARD_WIDTH = 12;
export const GAME_BOARD_HEIGHT = 20;

export const NEXT_TETRO_BOARD_WIDTH = 3;
export const NEXT_TETRO_BOARD_HEIGHT = 4;

export const createGameBoard = () =>
  Array.from(Array(GAME_BOARD_HEIGHT), () =>
    new Array(GAME_BOARD_WIDTH).fill([0, "clear"])
  );

export const createNextTetroBoard = () =>
  Array.from(Array(NEXT_TETRO_BOARD_HEIGHT), () =>
    new Array(NEXT_TETRO_BOARD_WIDTH).fill([0, "clear"])
  );
