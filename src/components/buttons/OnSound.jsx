import React from "react";
import {StyledButton} from "./buttons.style";

export const OnSound = ({callback}) => {
  return <StyledButton onClick={callback}>On Sound</StyledButton>;
};
