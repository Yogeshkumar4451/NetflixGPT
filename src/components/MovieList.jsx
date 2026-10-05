import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {
  if (!movies?.length) return null;

  return (
    <section className="px-3 py-4 sm:px-4 md:px-6">
      <h2 className="mb-3 text-lg font-bold text-white sm:mb-4 sm:text-xl md:text-2xl lg:text-3xl">
        {title}
      </h2>

      <div
        className="
          flex
          gap-2
          overflow-x-auto
          scroll-smooth
          pb-3
          snap-x
          snap-mandatory
          sm:gap-3
          md:gap-4
          lg:gap-5
        "
      >
        {movies.map((movie) => (
          <div key={movie.id} className="snap-start">
            <MovieCard posterpath={movie.poster_path} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;
