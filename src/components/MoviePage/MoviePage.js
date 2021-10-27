import React from "react";
import {
  CastSection,
  ImagesSection,
  InformationSection,
  MoviePage,
  MoviesRelatedSection,
  SectionTitle,
} from "./MoviePageStyles";

const MoviePageComponent = () => {
  return (
    <MoviePage>
      <InformationSection>
        <div className="movieImage"></div>
        <div className="info">
          <div className="movieName">
            Venom: Carnage Liberado<span className="year">(2021)</span>
          </div>

          <div className="extra">
            <span className="date">01/01/2021</span>
            <span className="genres"> ~ Action, science fiction</span>
            <span className="duration"> ~ 1h 50m</span>
          </div>
          <div className="rating">
            <p className="number">
              70<span className="percentage">%</span>
            </p>
          </div>
          <div className="summary">
            <div className="title">Summary</div>
            <div className="content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quo iusto libero, earum nisi ipsum adipisci pariatur
              cumque veniam obcaecati illo dolores animi aliquid dicta. Dolore
              soluta sunt atque ut sapiente modi, repudiandae debitis cum qui
              esse harum commodi assumenda?
            </div>
          </div>
        </div>
      </InformationSection>
      <CastSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Cast</p>
        </SectionTitle>
        <div className="castMembers">
          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name</p>
            <p className="character">Character</p>
          </div>

          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name</p>
            <p className="character">Character</p>
          </div>

          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name</p>
            <p className="character">Character</p>
          </div>

          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name</p>
            <p className="character">Character</p>
          </div>

          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name Actor Name</p>
            <p className="character">Character</p>
          </div>

          <div className="castMemberCard">
            <div className="picture"></div>
            <p className="name">Actor Name</p>
            <p className="character">Character</p>
          </div>
        </div>
      </CastSection>
      <ImagesSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Images</p>
        </SectionTitle>
        <div className="wrapper">
          <div className="item">
            <div className="image"></div>
          </div>
          <div className="item">
            <div className="image"></div>
          </div>
          <div className="item">
            <div className="image"></div>
          </div>
          <div className="item">
            <div className="image"></div>
          </div>
        </div>
      </ImagesSection>
      <MoviesRelatedSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Movies related</p>
        </SectionTitle>
        <div className="movies">
          <div className="wrapper">
            <div className="item">
              <div className="image"></div>
            </div>
            <div className="item">
              <div className="image"></div>
            </div>
            <div className="item">
              <div className="image"></div>
            </div>
          </div>
        </div>
      </MoviesRelatedSection>
    </MoviePage>
  );
};

export default MoviePageComponent;
