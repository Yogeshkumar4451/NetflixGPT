import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addUpcomingMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming',
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(
            `TMDB request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        dispatch(addUpcomingMovies(data.results ?? []));
      } catch (error) {
        console.error('Failed to fetch upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();
  }, [dispatch]);
};

export default useUpcomingMovies;
