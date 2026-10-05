import { useSelector } from 'react-redux';

import useOnPlayMovies from '../hooks/useOnPlayMovies';
import usePopularMovies from '../hooks/usepopularmovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';
import SecondaryContainer from './SecondaryContainer';

const MainContainer = () => {
  useOnPlayMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  if (!movies?.length) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
          <h1 className="text-2xl font-bold">Loading NetflixGPT...</h1>
        </div>
      </div>
    );
  }

  const mainMovie = movies[3] ?? movies[0];

  return (
    <>
      <div className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh] md:h-screen">
        <VideoBG movieID={mainMovie.id} />

        <VideoTitle
          title={mainMovie.original_title}
          overview={mainMovie.overview}
        />
      </div>

      <SecondaryContainer />
    </>
  );
};

export default MainContainer;
