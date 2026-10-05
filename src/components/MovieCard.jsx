import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterpath }) => {
  if (!posterpath) return null;

  const posterUrl = POSTER_URL + posterpath;

  return (
    <div className="w-28 shrink-0 pr-2 sm:w-36 sm:pr-3 md:w-44 md:pr-4 lg:w-48 xl:w-52">
      <img
        src={posterUrl}
        alt="Movie Poster"
        loading="lazy"
        draggable="false"
        className="
          w-full
          cursor-pointer
          select-none
          rounded-lg
          object-cover
          shadow-lg
          transition-all
          duration-300
          ease-in-out
          hover:scale-105
          hover:shadow-2xl
          active:scale-95
        "
      />
    </div>
  );
};

export default MovieCard;
