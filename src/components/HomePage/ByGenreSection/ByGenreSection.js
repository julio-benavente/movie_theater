import React, { useState } from "react";
import { MdArrowForward } from "react-icons/md";

import {
  ByGenreSection,
  GenreButton,
  GenreButtons,
  MoreButton,
  MovieCard,
  MoviesWrapper,
  SectionHeader,
  SectionTitle,
  MoviesSlider,
} from "./ByGenreSectionStyles";

import defaultSliderSettings from "../../../util/defaultSliderSettings";

const ByGenreSectionComponent = () => {
  const [genre, setGenre] = useState("action");
  const genreList = [
    "Action",
    "Drama",
    "Sci Fiction",
    "Comedy",
    "Romance",
    "Adventure",
  ];

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
        {genreList.map((e, i) => (
          <GenreButton key={i}>{e}</GenreButton>
        ))}
      </GenreButtons>

      <MoviesWrapper>
        <MoviesSlider {...defaultSliderSettings}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
            <MovieCard key={i}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                alt="movie poster"
              />
            </MovieCard>
          ))}
        </MoviesSlider>
      </MoviesWrapper>
    </ByGenreSection>
  );
};

export default ByGenreSectionComponent;
