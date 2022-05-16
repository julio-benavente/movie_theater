import styled, { css } from "styled-components";
import {
  Container,
  sectionPadding,
  Title,
  DefaultSlider,
} from "../../styles/globlaStyles";
import { transparentize } from "polished";

export const MoviePage = styled(Container)`
  ${sectionPadding}
`;

export const SectionTitle = styled(Title)``;

const sectionMarginBottom = css`
  margin-bottom: clamp(1rem, 7vh, 2.5rem);
`;

export const InformationSection = styled.div`
  ${sectionMarginBottom}
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: clamp(1rem, 7vw, 2rem);

  .movieImage {
    max-width: 300px;
    aspect-ratio: 9/14;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
    box-shadow: 3px 3px 8px
      ${(props) => transparentize(0.4, props.theme.colors.black)};
  }

  @media screen and (max-width: 800px) {
    .movieImage {
      max-width: 200px;
    }
  }

  @media screen and (max-width: 600px) {
    column-gap: clamp(0.5rem, 7vw, 1rem);
    .movieImage {
      max-width: 170px;
    }
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    .movieImage {
      max-width: 250px;
      justify-self: center;
    }
  }
`;

export const MovieInformation = styled.div`
  display: grid;
  padding: clamp(1rem, 7vw, 3rem) 0;
  width: 100%;
  align-content: start;
  max-width: 500px;

  .name {
    font-size: clamp(1rem, 4vw, 1.5rem);
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 10px;
    font-weight: 700;
    .year {
      font-size: clamp(1rem, 4vw, 1.5rem);
      color: ${(props) => props.theme.colors.gray400};
      font-weight: 500;
      padding-left: 10px;
    }
  }
  .extra {
    color: ${(props) => props.theme.colors.gray400};
    margin-bottom: 10px;
  }

  .rating {
    display: grid;
    justify-items: center;
    align-items: center;
    border-radius: 100%;
    border: 5px solid ${(props) => props.theme.colors.secondary};
    width: 55px;
    height: 55px;
    margin-bottom: 10px;

    p {
      line-height: 100%;
      font-size: 1.5rem;
      color: ${(props) => props.theme.colors.primary};
      span {
        position: relative;
        font-size: 0.8rem;
        top: -7px;
      }
    }
  }

  .summary {
    .title {
      font-size: 1.4rem;
      color: ${(props) => props.theme.colors.primary};
      font-weight: 700;
      margin-bottom: 10px;
    }
    .content {
    }
  }

  @media screen and (max-width: 800px) {
    grid-row: 1/2;
    padding: 0;
  }
`;

export const CastSlider = styled(DefaultSlider)``;

export const CastSection = styled.div`
  ${sectionMarginBottom}
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  .castMembers {
    display: grid;
    grid-template-columns: minmax(10px, 1fr);

    .castMemberCard {
      display: grid;
      outline: none;
      grid-template-rows: 100px auto auto;
      justify-content: center;
      justify-items: center;
      width: 300px;
      margin: 0 20px;
      width: calc(100% - 40px);

      img {
        border-radius: 10px;
        width: calc(100% - 40px);
        aspect-ratio: 16/9;
        object-fit: cover;
        object-position: center;
        box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
          0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
          0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
      }

      .name {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.1rem;
        margin-top: 0.8rem;
        text-align: center;
        box-sizing: border-box;
        width: calc(100% - 40px);
      }
      .character {
        width: calc(100% - 40px);
        color: ${(props) => props.theme.colors.gray400};
        text-align: center;
      }
    }
  }
`;

export const ImagesSection = styled.div`
  ${sectionMarginBottom}
  box-sizing: border-box;
`;

export const MovieImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(100px, 1fr);

  .movie_image {
    width: 300px;
    aspect-ratio: 16/9;
    outline: none;

    img {
      width: calc(100% - 2rem);
      margin: 1rem;
      display: block;
      border-radius: 10px;
      object-fit: cover;
      object-position: center;
      box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
        0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
        0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
    }
  }
`;

export const ImagesSlider = styled(DefaultSlider)``;

export const MoviesRelatedSection = styled(ImagesSection)``;

export const MoviesRelatedWrapper = styled(MovieImagesWrapper)``;

export const MoviesRelatedSlider = styled(DefaultSlider)``;
