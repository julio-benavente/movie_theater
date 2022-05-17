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
  Slider,
} from "./ByGenrePageStyles";

import defaultSliderSettings from "../../util/defaultSliderSettings";

const ByGenrePageComponent = () => {
  const [genre, setGenre] = useState("action");
  const sliderSettings = { ...defaultSliderSettings };

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
        <Slider {...sliderSettings}>
          {[1, 2, 3, 5, 6, 7, 8, 9, 10, 1, 2, 3, 5, 6, 7, 8, 9, 10].map(
            (e, i) => (
              <MovieCardItem key={i}>
                <img
                  src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                  alt="movie poster"
                />
              </MovieCardItem>
            )
          )}
        </Slider>
      </MoviesWrapper>
      {/* 
      <LoadMoreButton>
        <MdUpdate />
        Load more movies
      </LoadMoreButton> */}
    </ByGenrePage>
  );
};

export default ByGenrePageComponent;
