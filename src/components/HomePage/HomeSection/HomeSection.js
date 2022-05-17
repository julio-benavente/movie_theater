import React, { useState, useEffect } from "react";
import axios from "axios";

// Styles
import { Headlines, HomeSection, MovieCard } from "./HomeSectionStyles";

const HomeSectionComponent = () => {
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [poster, setPoster] = useState(null);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );

        const results = response.data.results;
        setPoster(results[0]);
      } catch ({ response }) {
        console.log({ message: "An error just occured", response });
      }
    };

    request();
  }, []);

  return (
    <HomeSection id="home">
      <Headlines>
        <p className="headline">
          Do not miss any of the <span>premieres</span> we have for you
        </p>
        <p className="subHeadline">
          The best movie of all genres, available 24/7, for you, your friends
          and family to enjoy non-stop
        </p>
      </Headlines>

      <MovieCard>
        {poster !== null && (
          <img
            src={`${imageBaseUrl}${poster.poster_path}`}
            alt={poster.original_title}
          />
        )}
      </MovieCard>
    </HomeSection>
  );
};

export default HomeSectionComponent;
