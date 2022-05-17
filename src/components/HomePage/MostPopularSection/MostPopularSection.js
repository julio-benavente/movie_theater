import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import {
  MostPopularSection,
  MoviesWrapper,
  SectionTitle,
  PosterItem,
  Slider,
} from "./MostPopularSectionStyles";

import defaultSliderSettings from "../../../util/defaultSliderSettings";

const MostPopularSectionComponent = () => {
  const [movies, setMovies] = useState(null);
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );
        const results = response.data.results;
        setMovies(results);
      } catch ({ response }) {
        console.log({ message: "An error just occured", response });
      }
    };

    request();
  }, []);

  return (
    <MostPopularSection id="mostPopular">
      <SectionTitle>
        <div className="rectangle"></div>
        <p>Most popular</p>
      </SectionTitle>
      <MoviesWrapper>
        {movies !== null && (
          <Slider {...defaultSliderSettings}>
            {movies.map((movie, i) => (
              <PosterItem key={i}>
                <img
                  src={`${imageBaseUrl}${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </PosterItem>
            ))}
          </Slider>
        )}
      </MoviesWrapper>
    </MostPopularSection>
  );
};

export default MostPopularSectionComponent;
