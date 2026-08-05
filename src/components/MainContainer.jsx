import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';
import SecondaryContainer from './SecondaryContainer';

import useOnPlayMovies from '../hooks/useOnPlayMovies';
import usePopularMovies from '../hooks/usepopularmovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const MainContainer = () => {
  useOnPlayMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-white">
        <div className="text-center">
          <div className="w-14 h-14 mx-auto mb-5 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>

          <h1 className="text-2xl font-bold">Loading NetflixGPT...</h1>
        </div>
      </div>
    );
  }

  const mainMovie = movies[3];

  return (
    <>
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden">
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
