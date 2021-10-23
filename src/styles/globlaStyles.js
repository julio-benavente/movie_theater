import styled, { createGlobalStyle, css } from "styled-components";

const globalStyles = createGlobalStyle`
  *, html {
    padding : 0;
    margin : 0;
    font-family: "Roboto Condensed";

  }

  body {
    box-sizing: border-box;
    font-family: "Roboto Condensed", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button {
    outline : none;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;

export default globalStyles;

export const H1 = styled.h1`
  color: red;
`;

export const Container = styled.div`
  display: grid;
  margin: auto;
  max-width: 960px;
  padding: 0 10px;
  @media screen and (min-width: 1200px) {
    max-width: 1050px;
  }

  @media screen and (min-width: 1400px) {
    max-width: 1200px;
  }

  ${(props) =>
    props.fluid &&
    css`
      max-width: none;
      padding: 0;
    `}
`;
