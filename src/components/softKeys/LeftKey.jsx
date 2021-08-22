import React from "react";
import {StyledLeftKey} from "./softkeys.style";

const LeftKey = ({callback}) => {
  return <StyledLeftKey onClick={callback} />;
};

export default LeftKey;
