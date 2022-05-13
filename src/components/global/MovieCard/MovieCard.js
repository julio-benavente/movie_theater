import { useState } from "react";
import {
  MovieCard,
  OpenMoreInfoButton,
  InformationSection,
} from "./MovieCardStyles";
import { AnimatePresence, motion } from "framer-motion";

import { MdClose, MdArrowBack } from "react-icons/md";

const MovieCardComponent = ({ size, ...props }) => {
  const [movieCardIsOn, setMovieCardIsOn] = useState(false);
  const handleMovieCard = () => setMovieCardIsOn(!movieCardIsOn);
  return (
    <MovieCard {...props}>
      <div className="image"></div>
    </MovieCard>
  );
};

export default MovieCardComponent;
