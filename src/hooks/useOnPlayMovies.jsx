import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../app/slices/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useOnPlayMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPlayingMovies = async () => {
      try {
        const data = await fetch(
          'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
          API_OPTIONS,
        );

        const json = await data.json();

        dispatch(addNowPlayingMovies(json.results));
      } catch (err) {
        console.error('Failed to fetch now playing movies', err);
      }
    };

    getPlayingMovies();
  }, [dispatch]);

  return null;
};

export default useOnPlayMovies;
