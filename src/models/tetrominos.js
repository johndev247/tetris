export const TETROMINOS = {
  0: {
    shape: [[0]],
    color: "#000",
  },
  I: {
    shape: [
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
      [0, "I", 0, 0],
    ],
    color: "#f5cd0c",
  },
  J: {
    shape: [
      [0, "J", 0],
      [0, "J", 0],
      ["J", "J", 0],
    ],
    color: "#f5560c",
  },
  L: {
    shape: [
      [0, "L", 0],
      [0, "L", 0],
      [0, "L", "L"],
    ],
    color: "#f4178f",
  },
  S: {
    shape: [
      [0, "S", "S"],
      ["S", "S", 0],
      [0, 0, 0],
    ],
    color: "#37f60d",
  },
  Z: {
    shape: [
      ["Z", "Z", 0],
      [0, "Z", "Z"],
      [0, 0, 0],
    ],
    color: "#5b0bf7",
  },
  O: {
    shape: [
      ["O", "O"],
      ["O", "O"],
    ],
    color: "#11c3ff",
  },
  T: {
    shape: [
      [0, 0, 0],
      ["T", "T", "T"],
      [0, "T", 0],
    ],
    color: "#bb0bc5",
  },
};

export const nextTetromino = [];

export const randomTetromino = () => {
  const tetrominos = "IJLZSOT";
  const regeneratTetro = () => {
    return tetrominos[Math.floor(Math.random() * tetrominos.length)];
  };
  for (let i = 0; i < 2; i++) {
    nextTetromino.push(TETROMINOS[regeneratTetro()]);
  }
};
