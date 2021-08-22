import React from "react";
import {StyledButton} from "./buttons.style";

const EndButton = ({callback}) => {
  return <StyledButton onClick={callback}>End Game</StyledButton>;
};

export default EndButton;
