import React from "react";

// Components
import VideoBanner from "../../components/videoBanner/VideoBanner";
import MostPopular from "../../components/mostPopular/MostPopular";

// Styled components
import { MoviesPageWrapper } from "./styles";

const MoviesPage = () => {
  return (
    <MoviesPageWrapper>
      <VideoBanner />
      <MostPopular/>
    </MoviesPageWrapper>
  );
};

export default MoviesPage;
