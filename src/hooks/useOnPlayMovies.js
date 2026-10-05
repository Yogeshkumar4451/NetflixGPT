import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addNowPlayingMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useOnPlayMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(
            `TMDB request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        dispatch(addNowPlayingMovies(data.results ?? []));
      } catch (error) {
        console.error('Failed to fetch now playing movies:', error);
      }
    };

    fetchNowPlayingMovies();
  }, [dispatch]);
};

export default useOnPlayMovies;
