import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";

import {
  ByGenrePage,
  GenreButton,
  GenreButtons,
  MoreButton,
  MovieCardItem,
  MoviesWrapper,
  SectionHeader,
  SectionTitle,
} from "./ByGenrePageStyles";

const ByGenrePageComponent = () => {
  const [genre, setGenre] = useState("action");

  return (
    <ByGenrePage id="byGenre">
      <SectionHeader>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>By genre:</p>
        </SectionTitle>
        <p className="genre">{genre}</p>
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
    </ByGenrePage>
  );
};

export default ByGenrePageComponent;
