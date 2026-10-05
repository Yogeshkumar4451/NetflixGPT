import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addTopRatedMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRated = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTopRatedMovies = async () => {
      try {
        const response = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated',
          API_OPTIONS,
        );

        if (!response.ok) {
          throw new Error(
            `TMDB request failed: ${response.status} ${response.statusText}`,
          );
        }

        const data = await response.json();

        dispatch(addTopRatedMovies(data.results ?? []));
      } catch (error) {
        console.error('Failed to fetch top rated movies:', error);
      }
    };

    fetchTopRatedMovies();
  }, [dispatch]);
};

export default useTopRated;
