import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background-color: ${({color}) => color};
  border: ${({type}) => (type === 0 ? "0px solid" : "4px solid")};
  border-bottom: ${({color}) => color};
  border-right: ${({color}) => color};
  border-top: ${({color}) => color};
  border-left: ${({color}) => color};
`;
