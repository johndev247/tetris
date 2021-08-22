import styled from "styled-components";

export const StyledDisplay = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  margin: 0 0 10px 0;
  padding: 10px;
  background-color: #000;
  border: 4px solid #333;
  min-height: 30px;
  width: 70%;
  border-radius: 20px;
  color: ${({gameover}) => (gameover ? "red" : "#999")};
  font-family: Pixel, sans-serif;
  font-size: 0.6rem;
  line-height: 15px;
  @media only screen and (max-width: 450px) {
    flex: 1 0 30px;
    margin: 0 0 5px 0;
  }
`;

export const BoardDisplay = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.4s all ease-out;
  display: ${({show}) => (show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const DisplayText = styled.h2`
  font-family: Pixel, sans-serif;
  font-size: 1.6rem;
  color: #fff;
`;
