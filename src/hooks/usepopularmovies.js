import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPopularMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(
            `TMDB request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        dispatch(addPopularMovies(data.results ?? []));
      } catch (error) {
        console.error('Failed to fetch popular movies:', error);
      }
    };

    fetchPopularMovies();
  }, [dispatch]);
};

export default usePopularMovies;
