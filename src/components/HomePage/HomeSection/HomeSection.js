import React from "react";
import { MdArrowDownward } from "react-icons/md";

// Stylesi
import {
  DownButton,
  Headlines,
  HomeSection,
  MoviesDisplay,
} from "./HomeSectionStyles";

const HomeSectionComponent = () => {
  return (
    <HomeSection>
      <Headlines>
        <p className="headline">
          Do not miss any of the <span>premieres</span> we have for you
        </p>
        <p className="subHeadline">
          The best movie of all genres, available 24/7, for you, your friends
          and family to enjoy non-stop
        </p>
      </Headlines>
      <DownButton>
        <MdArrowDownward />
      </DownButton>
      <MoviesDisplay>
        <div className="image"></div>
      </MoviesDisplay>
    </HomeSection>
  );
};

export default HomeSectionComponent;
