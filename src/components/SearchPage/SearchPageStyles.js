import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  Container,
  Title,
  MovieCard,
  sectionPadding,
} from "../../styles/globlaStyles";
import { transparentize } from "polished";

export const SearchPage = styled(Container)`
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

export const SearchWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;
  margin-bottom: 1rem;
  .searchBox {
    padding: 5px 10px;
    border: 2px solid
      ${(props) => transparentize(0.6, props.theme.colors.secondary)};
    border-radius: 5px;
    outline: none;
    &:focus,
    &:active,
    &:hover {
      border: 2px solid ${(props) => props.theme.colors.secondary};
    }
  }
  .searchButton {
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

    svg {
      font-size: 1rem;
    }
  }
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

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  justify-items: space-between;
  margin-bottom: 2rem;
`;

export const MovieCardItem = styled(MovieCard)`
  height: 300px;
`;
