import React, {useState} from "react";
import Display from "../display/Display";
import NextMino from "../nextmino/NextMino";
import {OnSound} from "../buttons/OnSound";
import {OffSound} from "../buttons/OffSound";
import GameBoard from "../gamebaord/GameBoard";
import StartButton from "../buttons/StartButton";
import PlayButton from "../buttons/PlayButton";
import PauseGame from "../buttons/PauseGame";
import {createGameBoard} from "../../models/gameHelpers";
import checkCollision from "../../utils/checkCollision";
import {StyledTetris, StyledTetrisWrapper} from "./tetris.style";
import {useBoard} from "../../hooks/useBoard";
import {useTetro} from "../../hooks/useTetro";
import {useInterval} from "../../hooks/useInterval";
import {useGameStatus} from "../../hooks/useGameStatus";
import music from "../../assets/sounds/music.mp3";
import over from "../../assets/sounds/gameover.mp3";
import start from "../../assets/sounds/start.mp3";
import cleared from "../../assets/sounds/line-remove.mp3";
import cleared4 from "../../assets/sounds/line-removal4.mp3";
import rotSound from "../../assets/sounds/block-rotate.mp3";
import pauseSound from "../../assets/sounds/pause.mp3";
import {Logo, LogoDiv} from "../nextmino/nextmino.style";
import logo from "../../assets/images/logo.png";
import EndButton from "../buttons/EndButton";

const Tetris = () => {
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [dropTime, setDropTime] = useState(null);
  const [clearSound, setClearSound] = useState(false);
  const [rotateSound, setRotateSound] = useState(false);
  const [pause, setPause] = useState(false);
  const [muted, setMuted] = useState(false);
  if (!localStorage.getItem("highest-score")) {
    localStorage.setItem("highest-score", JSON.stringify(0));
  }
  const highestScore = JSON.parse(localStorage.getItem("highest-score"));
  const [
    tetro,
    nextTetroMino,
    updateTetroPos,
    resetTetro,
    NextTetro,
    resetNextTetro,
    rotateTetro,
  ] = useTetro();
  const [board, setBoard, nextBoard, rowsCleared] = useBoard(
    tetro,
    NextTetro,
    resetTetro,
    resetNextTetro
  );

  const [rows, setRows, score, setScore, level, setLevel] =
    useGameStatus(rowsCleared);

  const setHighestScore = () => {
    if (gameOver && score > highestScore) {
      localStorage.setItem("highest-score", JSON.stringify(score));
    }
  };
  setHighestScore();

  if (rowsCleared > 0) {
    setTimeout(() => {
      setClearSound(true);
    });
  }
  setTimeout(() => {
    if (tetro.pos.y === 1) {
      setClearSound(false);
    }
  }, 200);

  console.log("Rerendered");

  const moveTetro = (dir) => {
    if (!checkCollision(tetro, board, {x: dir, y: 0})) {
      updateTetroPos({x: dir, y: 0});
    }
  };
  const startGame = () => {
    setStarted(true);
    setBoard(createGameBoard());
    setDropTime(500);
    resetTetro();
    setGameOver(false);
    setScore(0);
    setRows(0);
    setLevel(1);
    setPause(false);
  };
  const endGame = () => {
    setGameOver(true);
    setDropTime(null);
    setBoard(createGameBoard());
    setTimeout(() => {
      setGameOver(false);
      setStarted(false);
      setScore(0);
      setRows(0);
      setLevel(1);
    }, 4000);
  };
  const drop = () => {
    if (rows > level * 10) {
      setLevel((prev) => prev + 1);
      setDropTime(500 / level);
    }

    if (!checkCollision(tetro, board, {x: 0, y: 1})) {
      updateTetroPos({x: 0, y: 1, collided: false});
    } else {
      if (tetro.pos.y < 1) {
        console.log("Game Over");
        setGameOver(true);
        setDropTime(null);
        setTimeout(() => {
          setGameOver(false);
          setStarted(false);
          setScore(0);
          setRows(0);
          setLevel(1);
          setBoard(createGameBoard());
        }, 4000);
      }
      updateTetroPos({x: 0, y: 0, collided: true});
    }
  };

  const keyUp = ({keyCode}) => {
    if (!gameOver && !pause) {
      if (keyCode === 40) {
        setDropTime(500 / level);
        console.log("Interval ON");
      } else if (keyCode === 38) {
        setRotateSound(false);
      }
    }
  };

  const softMouseUp = () => {
    if (!gameOver && !pause) {
      setDropTime(500 / level);
    }
  };

  const softMouseUpKey = () => {
    setRotateSound(false);
  };

  const dropTetro = () => {
    setDropTime(null);
    if (!pause) {
      drop();
    }
  };
  const move = ({keyCode}) => {
    if (!gameOver && !pause) {
      if (keyCode === 37) {
        moveTetro(-1);
      } else if (keyCode === 39) {
        moveTetro(1);
      } else if (keyCode === 40) {
        dropTetro();
      } else if (keyCode === 38) {
        rotateTetro(board, 1);
        setRotateSound(true);
      }
    }
  };

  const softKeyUp = () => {
    if (!gameOver && !pause) {
      rotateTetro(board, 1);
      setRotateSound(true);
    }
  };
  const softKeyLeft = () => {
    if (!gameOver && !pause) {
      moveTetro(-1);
    }
  };
  const softKeyRight = () => {
    if (!gameOver && !pause) {
      moveTetro(1);
    }
  };
  const softKeyDown = () => {
    if (!gameOver && !pause) {
      dropTetro();
      setDropTime(500 / level - 400);
    }
  };

  useInterval(() => {
    drop();
  }, dropTime);

  const playGame = () => {
    setPause(false);
    setDropTime(500 / level);
  };
  const pauseGame = () => {
    setPause(true);
    setDropTime(null);
  };

  const onGameSound = () => setMuted(false);

  const offGameSound = () => setMuted(true);

  return (
    <StyledTetrisWrapper
      role="button"
      tabIndex="0"
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <GameBoard
          gameBoard={board}
          softKeyUp={softKeyUp}
          softKeyLeft={softKeyLeft}
          softKeyRight={softKeyRight}
          softKeyDown={softKeyDown}
          softMouseUp={softMouseUp}
          softMouseUpKey={softMouseUpKey}
          gameOver={gameOver}
          paused={pause}
        />
        <a href="https://johndev247.herokuapp.com/">
          <LogoDiv>
            <Logo src={logo} />
          </LogoDiv>
        </a>
        <aside>
          {gameOver ? (
            <>
              <audio src={over} autoPlay />
              (
              <Display gameOver={gameOver} text="Game Over" />){" "}
            </>
          ) : (
            <>
              {started && (
                <NextMino nextTetroMino={nextTetroMino} gameBoard={nextBoard} />
              )}
              <Display text={`Score: ${score}`} />
              <Display text={`Row: ${rows}`} />
              <Display text={`Level: ${level}`} />
              <Display text={`Highest Score: ${highestScore}`} />

              {muted ? (
                <OnSound callback={onGameSound} />
              ) : (
                <OffSound callback={offGameSound} />
              )}
              {started && !pause && (
                <audio src={music} autoPlay loop muted={muted} />
              )}
              {started && clearSound && (
                <audio
                  src={rowsCleared <= 3 ? cleared : cleared4}
                  autoPlay
                  muted={muted}
                />
              )}
              {started && rotateSound && (
                <audio src={rotSound} autoPlay muted={muted} />
              )}
              {started && (
                <audio
                  src={pause ? pauseSound : start}
                  autoPlay
                  muted={muted}
                />
              )}
              {started && (
                <>
                  {pause ? (
                    <PlayButton callback={playGame} />
                  ) : (
                    <PauseGame callback={pauseGame} />
                  )}
                </>
              )}
              {started ? (
                <EndButton callback={endGame} />
              ) : (
                <StartButton callback={startGame} />
              )}
            </>
          )}
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
