import { useSelector } from 'react-redux';

import useGetPlayingMoviesTrailer from '../hooks/useGetPlayingMoviesTrailer';

const VideoBG = ({ movieID }) => {
  const trailer = useSelector((store) => store.movies?.trailers?.[movieID]);

  useGetPlayingMoviesTrailer(movieID);

  if (!trailer?.key) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black text-white">
        No Trailer Available 😐
      </div>
    );
  }

  const trailerUrl = `https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&playsinline=1&rel=0&modestbranding=1`;

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="
          absolute left-1/2 top-1/2
          h-[220vh] w-[220vw]
          -translate-x-1/2 -translate-y-1/2
          sm:h-[180vh] sm:w-[180vw]
          md:h-[140vh] md:w-[140vw]
          lg:h-[120vh] lg:w-[120vw]
          xl:h-[110vh] xl:w-[110vw]
          pointer-events-none
        "
      >
        <iframe
          className="h-full w-full"
          src={trailerUrl}
          title="Movie Trailer"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
};

export default VideoBG;
