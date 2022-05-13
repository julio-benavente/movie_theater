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
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;

  @media screen and (max-width: 1150px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }

  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;
