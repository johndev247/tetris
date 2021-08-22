import {useState, useCallback, useEffect} from "react";

export const useGameStatus = (rowsCleared) => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    if (rowsCleared > 0) {
      setScore((prev) => prev + linePoints[rowsCleared - 1] * level);
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);
  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);
  return [rows, setRows, score, setScore, level, setLevel];
};
