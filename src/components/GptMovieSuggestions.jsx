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
    <div className="relative z-20 mt-6 sm:mt-8 md:mt-12 pb-10 px-2 sm:px-4 md:px-8">
      <div className="bg-black/70 backdrop-blur-md rounded-xl p-3 sm:p-4 md:p-6 shadow-xl">
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
