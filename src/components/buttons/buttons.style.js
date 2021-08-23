import styled from "styled-components";

export const StyledButton = styled.button`
  box-sizing: border-box;
  margin: 0 0 10px 0;
  padding: 10px;
  min-height: 20px;
  width: 70%;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #333;
  font-family: Pixel, sans-serif;
  font-size: 0.7rem;
  cursor: pointer;
  @media only screen and (max-width: 450px) {
    flex: 1 0 30px;
    margin: 0;
    font-size: 0.6rem;
    max-height: 32px;
    line-height: 13px;
  }
`;
