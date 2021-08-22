import React from "react";
import {StyledButton} from "./buttons.style";

const PlayButton = ({callback}) => {
  return <StyledButton onClick={callback}>Play</StyledButton>;
};

export default PlayButton;
