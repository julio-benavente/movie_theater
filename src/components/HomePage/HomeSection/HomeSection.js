import React from "react";

// Styles
import {
  Headlines,
  HomeSection,
  MovieCard,
  MoviesDisplay,
} from "./HomeSectionStyles";

const HomeSectionComponent = () => {
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

      <MoviesDisplay>
        <MovieCard>
          <div className="image"></div>
        </MovieCard>
      </MoviesDisplay>
    </HomeSection>
  );
};

export default HomeSectionComponent;
