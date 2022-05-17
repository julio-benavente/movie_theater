import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  MovieCard,
  sectionPadding,
  DefaultSlider,
  PosterSliderItem,
} from "../../styles/globlaStyles";
import { transparentize } from "polished";

export const ByGenrePage = styled(Container)`
  ${sectionPadding}
`;

export const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  margin-bottom: 1.5rem;
  align-items: center;
  .genre {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.primary};

    &:first-letter {
      text-transform: uppercase;
    }
  }
`;

export const SectionTitle = styled(Title)`
  margin-bottom: 0;
  margin-right: 10px;
`;

export const LoadMoreButton = styled(Link)`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 10px;
  justify-self: end;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: 700;
  justify-self: center;
  svg {
    font-size: 1rem;
  }
`;

export const GenreButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 120px);
  gap: 1rem;
  justify-items: stretch;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
    row-gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 350px) {
    grid-template-columns: 1fr;
  }
`;

export const GenreButton = styled.div`
  display: grid;
  width: 100%;
  padding: 10px 0;
  grid-template-columns: auto;
  justify-items: center;
  background-color: ${(props) =>
    transparentize(0.7, props.theme.colors.secondary)};
  border-radius: 5px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  &.active,
  &:hover {
    background-color: ${(props) => (props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;

export const MoviesWrapper = styled(DefaultSlider)``;

export const MovieCardItem = styled(PosterSliderItem)``;
