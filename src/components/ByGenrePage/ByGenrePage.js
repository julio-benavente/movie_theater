import React, { useState, useEffect } from "react";
import { MdUpdate } from "react-icons/md";
import axios from "axios";

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

const ByGenrePageComponent = (props) => {
  const stateSent = props.location.state;
  const previousGenre = stateSent ? stateSent.previousGenre : null;
  const [movies, setMovies] = useState(null);
  const [genres, setGenres] = useState(null);
  const [currentGenre, setCurrentGenre] = useState(previousGenre);

  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`
        );

        const results = response.data.genres;

        setGenres(results);

        if (!previousGenre) {
          setCurrentGenre(results[0]);
        }
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

  const sliderSettings = { ...defaultSliderSettings };

  return (
    <ByGenrePage id="byGenre">
      <SectionHeader>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>By genre:</p>
        </SectionTitle>
        <p className="genre">{currentGenre !== null && currentGenre.name}</p>
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
          <Slider {...sliderSettings}>
            {movies.map((movie, i) => (
              <MovieCardItem key={i}>
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </MovieCardItem>
            ))}
          </Slider>
        )}
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
