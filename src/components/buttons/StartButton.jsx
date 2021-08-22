import React from "react";
import {StyledButton} from "./buttons.style";

const StartButton = ({callback}) => {
  return <StyledButton onClick={callback}>Start Game</StyledButton>;
};

export default StartButton;
