import { MovieCard } from "./MovieCardStyles";

const MovieCardComponent = ({ size, ...props }) => {
  return (
    <MovieCard {...props}>
      <img
        src="https://m.media-amazon.com/images/M/MV5BNTFiNzBlYmEtMTcxZS00ZTEyLWJmYmQtMjYzYjAxNGQwODAzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
        alt="movie poster"
      />
    </MovieCard>
  );
};

export default MovieCardComponent;
