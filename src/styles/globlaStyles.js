import styled, { createGlobalStyle, css } from "styled-components";
import { transparentize } from "polished";

const globalStyles = createGlobalStyle`

   *, html {
    padding : 0;
    margin : 0;
  }

  body {
    box-sizing: border-box;
    > * {
        font-family: 'Lato', sans-serif;

    }
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

export const MovieCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 3px 3px 6px
    ${(props) => transparentize(0.2, props.theme.colors.black)};
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg");
    background-position: center;
    background-size: cover;
  }
`;

export const Title = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin-bottom: 1.5rem;
  .rectangle {
    height: 100%;
    width: 10px;
    background-color: ${(props) => props.theme.colors.secondary};
  }

  p {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const sectionPadding = css`
  padding-top: clamp(1rem, 10vh, 4rem);
  padding-bottom: clamp(1rem, 10vh, 4rem);
`;
