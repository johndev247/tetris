import React from "react";
import {StyledUpKey} from "./softkeys.style";

const UpKey = ({callback, softMouseUpKey}) => {
  return <StyledUpKey onClick={callback} onMouseUp={softMouseUpKey} />;
};

export default UpKey;
