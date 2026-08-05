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

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[220vw]
          h-[220vh]
          sm:w-[180vw]
          sm:h-[180vh]
          md:w-[140vw]
          md:h-[140vh]
          lg:w-[120vw]
          lg:h-[120vh]
          xl:w-[110vw]
          xl:h-[110vh]
          pointer-events-none
        "
      >
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailer.key}&playsinline=1&rel=0&modestbranding=1`}
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
