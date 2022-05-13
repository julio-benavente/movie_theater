import React from "react";

// Components
import MovieCard from "../../global/MovieCard/MovieCard";

// Styles
import {
  MostPopularSection,
  MoviesWrapper,
  SectionTitle,
} from "./MostPopularSectionStyles";

const MostPopularSectionComponent = () => {
  return (
    <MostPopularSection id="mostPopular">
      <SectionTitle>
        <div className="rectangle"></div>
        <p>Most popular</p>
      </SectionTitle>
      <MoviesWrapper>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </MoviesWrapper>
    </MostPopularSection>
  );
};

export default MostPopularSectionComponent;
