import styled, { css } from "styled-components";
import { transparentize, darken } from "polished";

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
  padding: 5px 5px;
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

  ${(props) =>
    props.size === "small" &&
    css`
      min-width: 20px;
      min-height: 20px;
      .moreInfoText {
        font-size: 0.9rem;
      }
    `}
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

  // small cards
  ${(props) =>
    props.size === "small" &&
    css`
      .info {
        &::-webkit-scrollbar {
          display: none;
        }
        .movieName {
          font-size: 1rem;
          .year {
            font-size: 1rem;
          }
        }

        .summary {
          .title {
            font-size: 1rem;
            margin-bottom: 5px;
          }

          .content {
            font-size: 0.9rem;
          }
        }
      }

      .extra {
        span {
          font-size: 0.9rem;
        }
      }

      .buttons {
        grid-template-columns: repeat(2, 1fr);

        .trailer,
        .moreInfo {
          width: 100%;
          padding: 5px 0;
        }
      }
    `}
`;
