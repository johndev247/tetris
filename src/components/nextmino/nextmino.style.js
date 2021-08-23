import styled from "styled-components";

export const StyledNextGameBoard = styled.div`
  display: grid;
  grid-template-rows: repeat(4, calc(50px / 3));
  grid-template-columns: repeat(3, 20px);
  grid-gap: 1px;
  width: 30%;
  background: #111;
  margin: 0.7em 0 0.2em 1em;
  @media only screen and (max-width: 450px) {
    flex: 1 0 30px;
  }
`;

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  overflow: hidden;
  @media only screen and (max-width: 450px) {
    flex: 1 0 30px;
  }
`;

export const NextTetroTitle = styled.h4`
  color: #fff;
  margin: 0.15em 0 0 20px;
  font-family: Pixel, sans-serif;
  font-size: 0.8em;
  @media only screen and (max-width: 450px) {
    position: absolute;
    top: 3px;
    left: 3%;
  }
`;

export const LogoDiv = styled.div`
  &:before {
    content: "Johndev247";
    color: #fff;
    position: absolute;
    top: 35px;
    right: 55px;
    @media only screen and (max-height: 660px) {
      display: none;
    }
  }
  position: absolute;
  bottom: 0;
  right: 0;

  @media only screen and (min-width: 768px) {
    right: 20%;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
