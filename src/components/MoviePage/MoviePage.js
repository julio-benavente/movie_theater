import React from "react";

import {
  CastSection,
  ImagesSection,
  InformationSection,
  MoviePage,
  MoviesRelatedSection,
  SectionTitle,
  MovieInformation,
  CastSlider,
  MovieImagesWrapper,
  ImagesSlider,
  MoviesRelatedWrapper,
  MoviesRelatedSlider,
} from "./MoviePageStyles";

var sliderSettings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  infinite: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const MoviePageComponent = () => {
  return (
    <MoviePage>
      <InformationSection>
        <img
          className="movieImage"
          src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
          alt="movie poster"
        />
        <MovieInformation>
          <div className="name">
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
        </MovieInformation>
      </InformationSection>

      <CastSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Cast</p>
        </SectionTitle>
        <div className="castMembers">
          <CastSlider {...sliderSettings}>
            {[0, 1, 2, 3, 4, 5].map((e, i) => (
              <div key={i} className="castMemberCard">
                <div className="actor_image">
                  <img
                    src="https://www.fortressofsolitude.co.za/wp-content/uploads/2020/12/The-New-York-Times-List-Of-Top-25-Actors-Of-The-21st-Century-Is-Controversial.jpg"
                    alt="actor poster"
                  />
                </div>
                <p className="name">Actor Name</p>
                <p className="character">Character</p>
              </div>
            ))}
          </CastSlider>
        </div>
      </CastSection>

      <ImagesSection>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Images</p>
        </SectionTitle>
        <MovieImagesWrapper>
          <ImagesSlider {...sliderSettings}>
            {[0, 1, 2, 3].map((e, i) => (
              <div className="movie_image" key={i}>
                <img
                  src="https://www.cnet.com/a/img/5OVL3iMZjo0wld8Uj15_C00bqKo=/940x0/2021/09/03/afa4abf1-ea46-45bf-b4d0-84259920a236/qlwgiefucodivdzjgil7.jpg"
                  alt="movie poster"
                />
              </div>
            ))}
          </ImagesSlider>
        </MovieImagesWrapper>
      </ImagesSection>
      <MoviesRelatedSection movies={3}>
        <SectionTitle>
          <div className="rectangle"></div>
          <p>Movies related</p>
        </SectionTitle>
        <MoviesRelatedWrapper className="wrapper">
          <MoviesRelatedSlider {...sliderSettings}>
            {[0, 1, 2].map((e, i) => (
              <div className="movie_image" key={i}>
                <img
                  src="https://www.cnet.com/a/img/5OVL3iMZjo0wld8Uj15_C00bqKo=/940x0/2021/09/03/afa4abf1-ea46-45bf-b4d0-84259920a236/qlwgiefucodivdzjgil7.jpg"
                  alt="movie poster"
                />
              </div>
            ))}
          </MoviesRelatedSlider>
        </MoviesRelatedWrapper>
      </MoviesRelatedSection>
    </MoviePage>
  );
};

export default MoviePageComponent;
