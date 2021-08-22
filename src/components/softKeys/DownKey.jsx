import React from "react";
import {StyledDownKey} from "./softkeys.style";

const DownKey = ({callback, softMouseUp}) => {
  return <StyledDownKey onMouseDown={callback} onMouseUp={softMouseUp} />;
};

export default DownKey;
