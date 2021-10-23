import styled, { createGlobalStyle, css } from "styled-components";

const globalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

  *, html {
    padding : 0;
    margin : 0;
    font-family: 'Poppins', sans-serif;
  }

  body {
    box-sizing: border-box;
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
  padding: 0 clamp(10px, 7vw, 50px);
  max-width: 1200px;
  /* 
  @media screen and (min-width: 1400px) {
    max-width: 1400px;
  } */

  ${(props) =>
    props.fluid &&
    css`
      max-width: none;
      padding: 0;
    `}
`;
