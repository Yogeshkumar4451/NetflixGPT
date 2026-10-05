import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import useOnPlayMovies from '../hooks/useOnPlayMovies';
import usePopularMovies from '../hooks/usepopularmovies';
import useTopRated from '../hooks/useTopRated';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

import { API_OPTIONS } from '../utils/constants';
import SecondaryContainer from './SecondaryContainer';
import VideoBG from './VideoBG';
import VideoTitle from './VideoTitle';

const findMovieWithTrailer = async (movies) => {
  for (const movie of movies) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
        API_OPTIONS,
      );

      if (!response.ok) {
        continue;
      }

      const data = await response.json();

      const hasTrailer = data.results?.some(
        (video) =>
          video.type === 'Trailer' && video.site === 'YouTube' && video.key,
      );

      if (hasTrailer) {
        return movie;
      }
    } catch (error) {
      console.error(`Failed to check trailer for "${movie.title}":`, error);
    }
  }

  return null;
};

const MainContainer = () => {
  useOnPlayMovies();
  usePopularMovies();
  useTopRated();
  useUpcomingMovies();

  const movies = useSelector((store) => store.movies.nowPlayingMovies);

  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    if (!movies.length) return;

    let cancelled = false;

    const loadFeaturedMovie = async () => {
      const movie = await findMovieWithTrailer(movies);

      if (!cancelled) {
        setFeaturedMovie(movie);
      }
    };

    loadFeaturedMovie();

    return () => {
      cancelled = true;
    };
  }, [movies]);

  if (!movies.length || !featuredMovie) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
          <h1 className="text-2xl font-bold">Loading NetflixGPT...</h1>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh] md:h-screen">
        <VideoBG movieID={featuredMovie.id} />

        <VideoTitle
          title={featuredMovie.original_title}
          overview={featuredMovie.overview}
        />
      </div>

      <SecondaryContainer />
    </>
  );
};

export default MainContainer;
