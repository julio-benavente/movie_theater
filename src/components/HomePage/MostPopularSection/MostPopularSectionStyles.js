import styled from "styled-components";
import {
  Container,
  Title,
  MovieCard,
  sectionPadding,
} from "../../../styles/globlaStyles";

export const MostPopularSection = styled(Container)`
  ${sectionPadding}
`;

export const SectionTitle = styled(Title)``;

export const MoviesWrapper = styled.div`
  display: grid;
  height: 550px;
  grid-template-columns: minmax(350px, 1fr) repeat(
      auto-fill,
      minmax(170px, 1fr)
    );
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  justify-items: space-between;
`;

export const MovieCardItem = styled(MovieCard)`
  &:first-of-type {
    grid-column: 1/2;
    grid-row: 1/3;
  }

  &:nth-of-type(1) {
    width: 100%;
  }
`;
