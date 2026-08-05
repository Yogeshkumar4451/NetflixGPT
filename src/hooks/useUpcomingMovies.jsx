import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUpcomingMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUpcomingMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/upcoming',
          API_OPTIONS,
        );

        const json = await data.json();

        dispatch(addUpcomingMovies(json.results));
      } catch (err) {
        console.error('Failed to fetch popular movies', err);
      }
    };

    getUpcomingMovies();
  }, [dispatch]);

  return null;
};

export default useUpcomingMovies;
