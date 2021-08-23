import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`
  body{
      margin: 0;
      padding: 0;
      background-color: #080a0f;
  }
  @font-face {
      font-family: 'Pixel';
      src: url("../fonts/Pixel-LCD-7.woff") format("woff");
  }
`;
