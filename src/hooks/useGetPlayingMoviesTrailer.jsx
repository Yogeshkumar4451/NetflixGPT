import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useGetPlayingMoviesTrailer = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieID) return;

    const getPlayingMoviesTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
        API_OPTIONS,
      );

      const json = await data.json();

      const selectedTrailer =
        json.results.find((video) => video.type === 'Trailer') ||
        json.results.find((video) => video.type === 'Teaser') ||
        json.results.find((video) => video.type === 'Clip') ||
        json.results[0];

      if (!selectedTrailer) return;

      dispatch(
        addTrailerVideo({
          movieID,
          trailerData: selectedTrailer,
        }),
      );
    };

    getPlayingMoviesTrailer();
  }, [movieID, dispatch]);
};

export default useGetPlayingMoviesTrailer;
