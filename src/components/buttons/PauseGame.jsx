import React from "react";
import {StyledButton} from "./buttons.style";

const PauseGame = ({callback}) => {
  return <StyledButton onClick={callback}>Pause</StyledButton>;
};

export default PauseGame;
