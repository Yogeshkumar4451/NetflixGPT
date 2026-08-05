import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTopRatedMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useTopRated = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getTopRated = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/top_rated',
          API_OPTIONS,
        );

        const json = await data.json();

        dispatch(addTopRatedMovies(json.results));
      } catch (err) {
        console.error('Failed to fetch popular movies', err);
      }
    };

    getTopRated();
  }, [dispatch]);

  return null;
};

export default useTopRated;
