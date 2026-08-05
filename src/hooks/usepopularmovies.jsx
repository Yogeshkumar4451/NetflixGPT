import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addPopularMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/popular',
          API_OPTIONS,
        );

        const json = await data.json();

        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.error('Failed to fetch popular movies', err);
      }
    };

    getPopularMovies();
  }, [dispatch]);

  return null;
};

export default usePopularMovies;
