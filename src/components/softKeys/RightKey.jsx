import React from "react";
import {StyledRighttKey} from "./softkeys.style";

const RightKey = ({callback}) => {
  return <StyledRighttKey onClick={callback} />;
};

export default RightKey;
