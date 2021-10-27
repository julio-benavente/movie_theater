import React from "react";
import {
  MostPopularSection,
  MovieCardItem,
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
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
      </MoviesWrapper>
    </MostPopularSection>
  );
};

export default MostPopularSectionComponent;
