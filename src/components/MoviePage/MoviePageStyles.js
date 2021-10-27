import styled, { css } from "styled-components";
import { Container, sectionPadding, Title } from "../../styles/globlaStyles";
import { transparentize } from "polished";

export const MoviePage = styled(Container)`
  ${sectionPadding}
  display: grid;
  grid-template-columns: 1fr minmax(150px, 300px);
  grid-template-areas:
    "information cast"
    "images images"
    "related related";
  gap: 2rem 1rem;
`;

export const SectionTitle = styled(Title)``;

export const InformationSection = styled.div`
  grid-area: information;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(200px, 300px) 1fr;
  column-gap: clamp(1rem, 7vw, 2rem);
  .movieImage {
    background-image: url("https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg");
    height: 100%;
    min-height: 400px;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    box-shadow: 3px 3px 8px
      ${(props) => transparentize(0.4, props.theme.colors.black)};
  }

  .info {
    display: grid;
    padding: clamp(1rem, 7vw, 3rem) 0;
    width: 100%;
    align-content: start;

    .movieName {
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
  }
`;

export const CastSection = styled.div`
  grid-area: cast;

  .castMembers {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem 0.7rem;

    .castMemberCard {
      display: grid;
      grid-template-rows: 100px auto auto;
      justify-items: center;
      .picture {
        background-image: url("https://www.fortressofsolitude.co.za/wp-content/uploads/2020/12/The-New-York-Times-List-Of-Top-25-Actors-Of-The-21st-Century-Is-Controversial.jpg");
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        border-radius: 10px;
        box-shadow: 2px 2px 6px
          ${(props) => transparentize(0.4, props.theme.colors.black)};
      }
      .name {
        color: ${(props) => props.theme.colors.primary};
        font-size: 1.1rem;
        margin-top: 0.8rem;
        text-align: center;
      }
      .character {
        color: ${(props) => props.theme.colors.gray400};
      }
    }
  }
`;

export const ImagesSection = styled.div`
  grid-area: images;

  .wrapper {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    ${(props) =>
      props.movies < 4 &&
      `grid-template-columns: repeat(auto-fit, minmax(200px, 250px));`}

    .item {
      width: 100%;
      height: 130px;
      position: relative;

      .image {
        width: 100%;
        height: 100%;
        position: absolute;
        background-position: center;
        background-size: cover;
        background-image: url("https://www.cnet.com/a/img/5OVL3iMZjo0wld8Uj15_C00bqKo=/940x0/2021/09/03/afa4abf1-ea46-45bf-b4d0-84259920a236/qlwgiefucodivdzjgil7.jpg");
        border-radius: 10px;
      }
    }
  }
`;

export const MoviesRelatedSection = styled(ImagesSection)`
  grid-area: related;
`;
