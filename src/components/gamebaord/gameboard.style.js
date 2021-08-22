import styled from "styled-components";

export const StyledGameBoard = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: repeat(20, calc(250px / 12));
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1px;
  border: 2px solid #333;
  min-width: 250px;
  background: #111;
`;
