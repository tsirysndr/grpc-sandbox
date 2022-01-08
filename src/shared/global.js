import { createGlobalStyle, css } from 'styled-components';


export const bodyStyles = css`
  font-family: 'Source Code Pro', monospace !important;
`;

export const GlobalStyle = createGlobalStyle`
 body {
   ${bodyStyles}
 }`;