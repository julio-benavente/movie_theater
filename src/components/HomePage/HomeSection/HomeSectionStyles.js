import styled from "styled-components";
import { Container } from "../../../styles/globlaStyles";
import { transparentize } from "polished";

export const HomeSection = styled(Container)`
  display: grid;
  grid-template-columns: 5fr 3fr;
  padding-top: 1rem;
  padding-bottom: 1rem;
  column-gap: 4rem;
  min-height: calc(100vh - 200px);
  align-content: center;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
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

  @media screen and (max-width: 700px) {
    max-width: 400px;
  }
`;

export const MovieCard = styled.div`
  width: 300px;
  aspect-ratio: 9/14;
  justify-self: end;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 4px 4px 8px
    ${(props) => transparentize(0.4, props.theme.colors.black)};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    object-position: center;
  }

  &:hover {
    .moreInfoText {
      max-width: 70px;
    }
  }

  @media screen and (max-width: 800px) {
    width: 250px;
  }

  @media screen and (max-width: 700px) {
    display: none;
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
