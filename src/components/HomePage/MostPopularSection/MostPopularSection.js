import React from "react";

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
  return (
    <MostPopularSection id="mostPopular">
      <SectionTitle>
        <div className="rectangle"></div>
        <p>Most popular</p>
      </SectionTitle>
      <MoviesWrapper>
        <Slider {...defaultSliderSettings}>
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((e, i) => (
            <PosterItem key={i}>
              <img
                src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
                alt="movie poster"
              />
            </PosterItem>
          ))}
        </Slider>
      </MoviesWrapper>
    </MostPopularSection>
  );
};

export default MostPopularSectionComponent;
