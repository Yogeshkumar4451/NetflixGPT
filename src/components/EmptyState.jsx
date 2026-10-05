const EmptyState = ({ hasSearched }) => {
  if (!hasSearched) {
    return (
      <div className="flex flex-col items-center justify-start px-4 pt-10 text-center text-white md:pt-16">
        <div className="mb-6 text-5xl">🎬</div>

        <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
          What would you like to watch today?
        </h2>

        <p className="mb-8 text-gray-400">Try one of these ideas:</p>

        <ul className="space-y-3 text-lg font-extrabold text-gray-200">
          <li>🍿 Marvel Movies</li>
          <li>🚀 Mind-Bending Sci-Fi</li>
          <li>👻 Horror Movies</li>
          <li>😂 Feel Good Comedy</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-center text-white">
      <div className="mb-6 text-5xl">😕</div>

      <h2 className="mb-4 text-2xl font-bold sm:text-3xl">No movies found</h2>

      <p className="text-gray-400">
        Try another search or use different keywords.
      </p>
    </div>
  );
};

export default EmptyState;
