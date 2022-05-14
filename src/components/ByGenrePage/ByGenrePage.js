import React, { useState } from "react";
import { MdUpdate } from "react-icons/md";

import {
  ByGenrePage,
  GenreButton,
  GenreButtons,
  LoadMoreButton,
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
        {[1, 2, 3, 5, 6, 7, 8, 9, 0].map((e) => (
          <MovieCardItem>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
              alt="movie poster"
            />
          </MovieCardItem>
        ))}
      </MoviesWrapper>

      <LoadMoreButton>
        <MdUpdate />
        Load more movies
      </LoadMoreButton>
    </ByGenrePage>
  );
};

export default ByGenrePageComponent;
