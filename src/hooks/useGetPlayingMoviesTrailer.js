import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addTrailerVideo } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useGetPlayingMoviesTrailer = (movieID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieID) return;

    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(
            `TMDB request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        const trailer = data.results?.find(
          (video) =>
            video.type === 'Trailer' && video.site === 'YouTube' && video.key,
        );

        if (!trailer) return;

        dispatch(
          addTrailerVideo({
            movieID,
            trailerData: trailer,
          }),
        );
      } catch (error) {
        console.error('Failed to fetch movie trailer:', error);
      }
    };

    fetchMovieTrailer();
  }, [movieID, dispatch]);
};

export default useGetPlayingMoviesTrailer;
