import React, { useState, useEffect } from "react";
import { MdArrowForward } from "react-icons/md";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [currentGenre, setCurrentGenre] = useState(null);

  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const history = useHistory();

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
        );

        const results = response.data.genres;

        setGenres(results);
        setCurrentGenre(results[0]);
      } catch ({ response }) {
        console.log({ message: "An error just occured", response });
      }
    };

    request();
  }, []);

  useEffect(() => {
    if (!currentGenre) {
      return;
    }

    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${currentGenre.id}&with_watch_monetization_types=flatrate`
        );
        const results = response.data.results;
        setMovies(results);
      } catch ({ response }) {
        console.log({ message: "An error just occured", response });
      }
    };

    request();
  }, [currentGenre]);

  return (
    <ByGenreSection id="byGenre">
      <SectionHeader>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>By genre:</p>
        </SectionTitle>
        <p className="genre">{currentGenre && currentGenre.name}</p>
        <MoreButton
          to={{
            pathname: "/by_genre",
            state: { previousGenre: currentGenre },
          }}
        >
          <span>More of this genre</span>
          <MdArrowForward />
        </MoreButton>
      </SectionHeader>

      <GenreButtons>
        {genres !== null &&
          genres.map((genre, i) => (
            <GenreButton key={genre.id} onClick={() => setCurrentGenre(genre)}>
              {genre.name}
            </GenreButton>
          ))}
      </GenreButtons>

      <MoviesWrapper>
        {movies !== null && (
          <MoviesSlider {...defaultSliderSettings}>
            {movies.map((movie, i) => (
              <MovieCard
                key={i}
                onClick={() => history.push(`/movies/${movie.id}`)}
              >
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </MovieCard>
            ))}
          </MoviesSlider>
        )}
      </MoviesWrapper>
    </ByGenreSection>
  );
};

export default ByGenreSectionComponent;
