import styled from "styled-components";
import { Container } from "../../../styles/globlaStyles";
import { transparentize, darken } from "polished";

export const HomeSection = styled(Container)`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
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

export const OpenMoreInfoButton = styled.div`
  position: absolute;
  min-width: 30px;
  min-height: 30px;
  padding: 5px 10px;
  border-radius: 40px;
  background-color: ${(props) => props.theme.colors.white};
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  cursor: pointer;

  .moreInfoText {
    width: auto;
    max-width: 0px;
    line-height: 100%;
    white-space: nowrap;
    overflow: hidden;
    transition: ${(props) => props.theme.transitions.slow};
  }
`;

export const InformationSection = styled.div`
  grid-area: information;
  width: calc(100% - 20px);
  display: grid;
  grid-template-columns: 1fr;
  column-gap: clamp(1rem, 7vw, 2rem);
  position: absolute;
  bottom: 0;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.white};
  padding: 20px 10px;
  border-radius: 10px;

  .close {
    position: absolute;
    display: grid;
    justify-items: center;
    align-items: center;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    border-radius: 100px;
    background-color: ${(props) => props.theme.colors.gray300};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.gray400};
    }
  }

  .info {
    display: grid;
    width: 100%;
    align-content: start;
    grid-template-columns: 1fr auto;
    max-height: 150px;
    overflow: auto;
    grid-template-areas:
      "name rating"
      "extra extra"
      "summary summary";
    .movieName {
      grid-area: name;
      font-size: 1.2rem;
      color: ${(props) => props.theme.colors.primary};
      margin-bottom: 10px;
      font-weight: 700;
      align-self: center;
      .year {
        font-size: 1.2rem;
        color: ${(props) => props.theme.colors.gray400};
        font-weight: 500;
        padding-left: 5px;
      }
    }
    .extra {
      grid-area: extra;
      color: ${(props) => props.theme.colors.gray400};
      font-size: 0.9rem;
      margin-bottom: 10px;
    }

    .rating {
      grid-area: rating;
      display: grid;
      justify-items: center;
      align-items: center;
      border-radius: 100%;
      border: 2px solid ${(props) => props.theme.colors.secondary};
      width: 35px;
      height: 35px;
      margin-bottom: 10px;
      align-self: center;

      p {
        line-height: 100%;
        font-size: 0.9rem;
        color: ${(props) => props.theme.colors.primary};
        span {
          position: relative;
          font-size: 0.5rem;
          top: -4px;
        }
      }
    }

    .summary {
      grid-area: summary;
      .title {
        font-size: 1.1rem;
        color: ${(props) => props.theme.colors.primary};
        font-weight: 700;
        margin-bottom: 10px;
      }
      .content {
        font-size: 0.9rem;
      }
    }
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 10px;
    margin-top: 1rem;

    .moreInfo,
    .trailer {
      width: calc(100% - 40px);
      display: grid;
      grid-template-columns: auto;
      align-items: center;
      background-color: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.primary};
      gap: 10px;
      padding: 10px 20px;
      border-radius: 5px;
      font-size: 0.8rem;
      text-transform: uppercase;
      font-weight: 700;
      justify-self: center;
      text-align: center;
      cursor: pointer;

      &:hover {
        background-color: ${(props) =>
          darken(0.1, props.theme.colors.secondary)};
        box-shadow: 2px 2px 4px
          ${(props) => transparentize(0.6, props.theme.colors.black)};
      }
    }
    .trailer {
      background-color: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      &:hover {
        background-color: ${(props) => darken(0.1, props.theme.colors.primary)};
      }
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
