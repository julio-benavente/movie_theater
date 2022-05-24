import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import defaultSliderSettings from "../../util/defaultSliderSettings";

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

const MoviePageComponent = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [images, setImages] = useState(null);
  const [moviesRelated, setMoviesRelated] = useState(null);

  const { movieId } = useParams();
  const history = useHistory();
  const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`
        );

        const result = response.data;
        setMovie(result);
      } catch ({ response }) {
        console.log({ message: "An error occured", response });
      }
    };

    request();
  }, [movieId, TMDB_API_KEY]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${TMDB_API_KEY}`
        );

        const results = response.data.backdrops;
        setImages(results);
      } catch ({ response }) {
        console.log({ message: "An error occured", response });
      }
    };

    request();
  }, [movieId, TMDB_API_KEY]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${TMDB_API_KEY}&language=en-US`
        );

        const result = response.data.cast;
        setCast(result);
      } catch ({ response }) {
        console.log({ message: "An error occured", response });
      }
    };

    request();
  }, [movieId, TMDB_API_KEY]);

  useEffect(() => {
    const request = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=${TMDB_API_KEY}&language=en-US&page=1`
        );

        const results = response.data.results;
        setMoviesRelated(results);
      } catch ({ response }) {
        console.log({ message: "An error occured", response });
      }
    };

    request();
  }, [movieId, TMDB_API_KEY]);

  return (
    movie !== null && (
      <MoviePage>
        <InformationSection>
          <img
            className="movieImage"
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}
          />
          <MovieInformation>
            <div className="name">
              {movie.title}
              <span className="year">{`(${new Date(
                movie.release_date
              ).getFullYear()})`}</span>
            </div>

            <div className="extra">
              <span className="date">
                {new Date(movie.release_date).toLocaleDateString([], {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </span>{" "}
              <span className="genres">
                ~ {movie.genres.map((e) => e.name).join(", ")}
              </span>{" "}
              <span className="duration">
                {" "}
                ~ {`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}
              </span>
            </div>
            <div className="rating">
              <p className="number">
                {movie.vote_average * 10}
                <span className="percentage">%</span>
              </p>
            </div>
            <div className="summary">
              <div className="title">Summary</div>
              <div className="content">{movie.overview}</div>
            </div>
          </MovieInformation>
        </InformationSection>

        <CastSection>
          <SectionTitle>
            <div className="rectangle"></div>
            <p>Cast</p>
          </SectionTitle>
          <div className="castMembers">
            {cast !== null && (
              <CastSlider {...defaultSliderSettings}>
                {cast.map((cast, i) => (
                  <div key={i} className="castMemberCard">
                    <div className="actor_image">
                      <img
                        src={
                          cast.profile_path
                            ? `${imageBaseUrl}${cast.profile_path}`
                            : "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="
                        }
                        alt={cast.name}
                      />
                    </div>
                    <p className="name">{cast.name}</p>
                    <p className="character">{cast.character}</p>
                  </div>
                ))}
              </CastSlider>
            )}
          </div>
        </CastSection>

        <ImagesSection>
          <SectionTitle>
            <div className="rectangle"></div>
            <p>Images</p>
          </SectionTitle>
          <MovieImagesWrapper>
            {images !== null && (
              <ImagesSlider {...defaultSliderSettings}>
                {images.map((image, i) => (
                  <div className="movie_image" key={i}>
                    <img
                      src={`${imageBaseUrl}${image.file_path}`}
                      alt="movie poster"
                    />
                  </div>
                ))}
              </ImagesSlider>
            )}
          </MovieImagesWrapper>
        </ImagesSection>
        <MoviesRelatedSection movies={3}>
          <SectionTitle>
            <div className="rectangle"></div>
            <p>Movies related</p>
          </SectionTitle>
          <MoviesRelatedWrapper className="wrapper">
            {moviesRelated !== null && (
              <MoviesRelatedSlider {...defaultSliderSettings}>
                {moviesRelated.map((movie, i) => (
                  <div
                    className="movie_image"
                    key={i}
                    onClick={() => history.push(`/movies/${movie.id}`)}
                  >
                    <img
                      src={`${imageBaseUrl}${movie.backdrop_path}`}
                      alt={movie.title}
                    />
                  </div>
                ))}
              </MoviesRelatedSlider>
            )}
          </MoviesRelatedWrapper>
        </MoviesRelatedSection>
      </MoviePage>
    )
  );
};

export default MoviePageComponent;
