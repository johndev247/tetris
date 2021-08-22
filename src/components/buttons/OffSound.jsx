import React from "react";
import {StyledButton} from "./buttons.style";

export const OffSound = ({callback}) => {
  return <StyledButton onClick={callback}>Off Sound</StyledButton>;
};
