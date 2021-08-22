const checkCollision = (tetro, board, {x: moveX, y: moveY}) => {
  for (let y = 0; y < tetro.tetromino.length; y++) {
    for (let x = 0; x < tetro.tetromino[y].length; x++) {
      if (tetro.tetromino[y][x] !== 0) {
        if (
          !board[y + tetro.pos.y + moveY] ||
          !board[y + tetro.pos.y + moveY][x + tetro.pos.x + moveX] ||
          board[y + tetro.pos.y + moveY][x + tetro.pos.x + moveX][1] !== "clear"
        ) {
          return true;
        }
      }
    }
  }
};
export default checkCollision;
