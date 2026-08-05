import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;

  return (
    <div className="flex-shrink-0 w-28 sm:w-36 md:w-44 lg:w-48 xl:w-52 pr-2 sm:pr-3 md:pr-4">
      <img
        src={POSTER_URL + posterpath}
        alt="Movie Poster"
        loading="lazy"
        draggable="false"
        className="
          w-full
          rounded-lg
          object-cover
          shadow-lg
          cursor-pointer
          transition-all
          duration-300
          ease-in-out
          hover:scale-105
          hover:shadow-2xl
          active:scale-95
          select-none
        "
      />
    </div>
  );
};

export default MovieCard;
