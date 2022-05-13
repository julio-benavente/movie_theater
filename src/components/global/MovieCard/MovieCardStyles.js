import styled from "styled-components";
import { transparentize } from "polished";

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
    &:nth-child(n + 7) {
      display: none;
    }
  }

  @media screen and (max-width: 950px) {
    &:nth-child(n + 5) {
      display: none;
    }
  }

  @media screen and (max-width: 740px) {
    &:nth-child(n + 3) {
      display: none;
    }
  }
`;
