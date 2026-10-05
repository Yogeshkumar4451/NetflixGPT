import { useSelector } from 'react-redux';

import MovieList from './MovieList';
import AILoading from './AILoading';
import EmptyState from './EmptyState';

const GptMovieSuggestions = () => {
  const { movieNames, movieResults, isLoading, hasSearched } = useSelector(
    (store) => store.gpt,
  );

  if (isLoading) {
    return <AILoading />;
  }

  if (!movieNames && !movieResults) {
    return <EmptyState hasSearched={hasSearched} />;
  }

  return (
    <div className="relative z-20 mt-6 px-2 pb-10 sm:mt-8 sm:px-4 md:mt-12 md:px-8">
      <div className="rounded-xl bg-black/70 p-3 shadow-xl backdrop-blur-md sm:p-4 md:p-6">
        {movieNames?.map((movie, index) => (
          <MovieList
            key={movie.title}
            title={movie.title}
            movies={movieResults?.[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
