import styled from "styled-components";
import { Container } from "../../../styles/globlaStyles";
import { transparentize, darken } from "polished";

export const HomeSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const Headlines = styled.div`
  p {
    color: ${(props) => props.theme.colors.primary};
    max-width: 500px;
    &.headline {
      font-size: clamp(2rem, 6vw, 3.5rem);
      font-weight: 700;
      letter-spacing: -2.5px;
      line-height: 105%;
      margin-bottom: 2rem;
      margin-top: clamp(1rem, 10vh, 4rem);
      span {
        color: ${(props) => props.theme.colors.secondary};
      }
    }

    &.subHeadline {
      font-size: 1.1rem;
      font-weight: 200;
    }
  }
`;

export const MoviesDisplay = styled.div`
  width: 350px;
  height: 500px;
  justify-self: end;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 4px 4px 8px
    ${(props) => transparentize(0.4, props.theme.colors.black)};
`;

export const MovieCard = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg");
    background-position: center;
    background-size: cover;
  }

  &:hover {
    .moreInfoText {
      max-width: 70px;
    }
  }
`;

export const DownButton = styled.div`
  width: 30px;
  height: 60px;
  align-self: end;
  background-color: ${(props) => props.theme.colors.black};
  border-radius: 40px;
  box-shadow: 0 0 6px
    ${(props) => transparentize(0.5, props.theme.colors.black)};
  transition: ${(props) => props.theme.transitions.regular};
  cursor: pointer;
  position: relative;
  &:hover {
    box-shadow: 0 0 10px
      ${(props) => transparentize(0.5, props.theme.colors.black)};

    svg {
      top: 70%;
    }
  }

  svg {
    position: absolute;
    font-size: 20px;
    color: ${(props) => props.theme.colors.secondary};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: ${(props) => props.theme.transitions.regular};
  }
`;
