import React from "react";
import { HomePage } from "./HomePageStyles";

// Components
import HomeSection from "./HomeSection/HomeSection";
import MostPopularSection from "./MostPopularSection/MostPopularSection";
import ByGenreSection from "./ByGenreSection/ByGenreSection";

const HomePageComponent = () => {
  return (
    <HomePage>
      <HomeSection />
      <MostPopularSection />
      <ByGenreSection />
    </HomePage>
  );
};

export default HomePageComponent;
