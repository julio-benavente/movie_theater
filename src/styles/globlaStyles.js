import styled, { createGlobalStyle, css } from "styled-components";
import { transparentize } from "polished";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

export const MoviesWrapper = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

export const DefaultSlider = styled(Slider)`
  .slick-slide {
    outline: none;

    &.slick-active {
    }
    &.slick-current {
    }
  }

  .slick-list {
    width: calc(100% - 60px);
    margin: auto;
  }

  button.slick-arrow,
  button.slick-arrow {
    height: 100%;
    width: 30px;
    background-color: ${(props) =>
      transparentize(0.9, props.theme.colors.black)};

    &::before,
    &::after {
      color: ${(props) => props.theme.colors.black};
    }

    &.slick-prev {
      left: 0px;
    }
    &.slick-next {
      right: 0px;
    }
  }
`;

export const MovieCard = styled.div`
  position: relative;

  img {
    width: 100%;
    max-width: 600px;
    aspect-ratio: 9/16;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 3px 3px 6px
      ${(props) => transparentize(0.2, props.theme.colors.black)};
  }

  &:nth-child(n + 9) {
    display: none;
  }

  @media screen and (max-width: 1150px) {
    &:nth-child(n + 9) {
      display: none;
    }
  }

  @media screen and (max-width: 950px) {
    &:nth-child(n + 7) {
      display: none;
    }
  }

  @media screen and (max-width: 800px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }

  @media screen and (max-width: 500px) {
    &:nth-child(n + 3) {
      display: none;
    }
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
