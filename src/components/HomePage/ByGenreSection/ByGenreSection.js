import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";

import {
  ByGenreSection,
  GenreButton,
  GenreButtons,
  MoreButton,
  MovieCardItem,
  MoviesWrapper,
  SectionHeader,
  SectionTitle,
} from "./ByGenreSectionStyles";
const ByGenreSectionComponent = () => {
  const [genre, setGenre] = useState("action");

  return (
    <ByGenreSection id="byGenre">
      <SectionHeader>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>By genre:</p>
        </SectionTitle>
        <p className="genre">{genre}</p>
        <MoreButton to="/">
          <span>More of this genre</span>
          <MdArrowForward />
        </MoreButton>
      </SectionHeader>

      <GenreButtons>
        <GenreButton>Action</GenreButton>
        <GenreButton>Drama</GenreButton>
        <GenreButton>Sci Fiction</GenreButton>
        <GenreButton>Comedy</GenreButton>
        <GenreButton>Romance</GenreButton>
        <GenreButton>Adventure</GenreButton>
      </GenreButtons>

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
        <MovieCardItem>
          <div className="image"></div>
        </MovieCardItem>
      </MoviesWrapper>
    </ByGenreSection>
  );
};

export default ByGenreSectionComponent;
