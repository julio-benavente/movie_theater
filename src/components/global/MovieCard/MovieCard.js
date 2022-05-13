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
      <AnimatePresence exitBeforeEnter>
        {!movieCardIsOn && (
          <OpenMoreInfoButton
            key={1}
            as={motion.div}
            onClick={handleMovieCard}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            size={size}
          >
            <MdArrowBack /> <p className="moreInfoText">More info</p>
          </OpenMoreInfoButton>
        )}
        {movieCardIsOn && (
          <InformationSection
            key={2}
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            size={size}
          >
            <div className="close" onClick={handleMovieCard}>
              <MdClose />
            </div>
            <div className="info">
              <div className="movieName">
                Venom: Carnage Liberado
                {size === "small" && <span className="year"> (2021)</span>}
                {size !== "small" && <span className="year">(2021)</span>}
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
                  Voluptatem quo iusto libero, earum nisi ipsum adipisci
                  pariatur cumque veniam obcaecati illo dolores animi aliquid
                  dicta. Dolore soluta sunt atque ut sapiente modi, repudiandae
                  debitis cum qui esse harum commodi assumenda?
                </div>
              </div>
            </div>
            <div className="buttons">
              {size !== "small" && (
                <>
                  <div className="trailer">Trailer</div>
                  <div className="moreInfo">Information</div>
                </>
              )}
              {size === "small" && (
                <>
                  <div className="trailer">Trailer</div>
                  <div className="moreInfo">Info</div>
                </>
              )}
            </div>
          </InformationSection>
        )}
      </AnimatePresence>
    </MovieCard>
  );
};

export default MovieCardComponent;
