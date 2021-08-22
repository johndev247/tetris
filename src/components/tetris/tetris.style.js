import styled from "styled-components";

export const StyledTetrisWrapper = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-self: center;
  width: 100vw;
  height: 100vh;
  background-color: #080a0f;
`;

export const StyledTetris = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  width: 100%;
  overflow: hidden;
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    padding: 5px;
  }
  @media only screen and (min-height: 730px) {
    margin-bottom: 3em;
  }
  @media only screen and (min-height: 800px) {
    margin-bottom: 8em;
  }
  aside {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    padding: 0;

    @media only screen and (max-width: 450px) {
      position: absolute;
      top: 20px;
      display: flex;
      flex-flow: row;
      flex-wrap: wrap;
      width: 270px;
      padding-top: 0.5em;
    }
  }
`;
