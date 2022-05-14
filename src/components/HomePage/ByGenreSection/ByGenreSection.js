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
        <MoreButton to="/by_genre">
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
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
          <MovieCardItem>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
              alt="movie poster"
            />
          </MovieCardItem>
        ))}
      </MoviesWrapper>
    </ByGenreSection>
  );
};

export default ByGenreSectionComponent;
