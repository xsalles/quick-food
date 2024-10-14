import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
*{
  scroll-behavior: smooth;
  font-family: sans-serif;
  margin: 0px;
  padding: 0px;
  border: none; 
  outline: none;
  font-size: 16px;
  box-sizing: border-box;
}

button{
  cursor: pointer;
}
`;
