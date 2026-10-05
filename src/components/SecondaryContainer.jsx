import { useSelector } from 'react-redux';
import MovieList from '../components/MovieList';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className=" bg-black ">
      <div className="-mt-20 relative z-10">
        <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
        <MovieList title={'Popular'} movies={movies.popularMovies} />
        <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
        <MovieList title={'Upcoming Movies'} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
