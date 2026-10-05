const EmptyState = ({ hasSearched }) => {
  if (!hasSearched) {
    return (
      <div className="flex flex-col items-center justify-start pt-10 text-white md:pt-16">
        <h1 className="mb-6 text-5xl">🎬</h1>

        <h2 className="mb-4 text-3xl font-bold">
          What would you like to watch today?
        </h2>

        <p className="mb-8 text-gray-400">Try one of these ideas:</p>

        <ul className="space-y-3 text-center text-lg font-extrabold text-gray-200">
          <li>🍿 Marvel Movies</li>
          <li>🚀 Mind-Bending Sci-Fi</li>
          <li>👻 Horror Movies</li>
          <li>😂 Feel Good Comedy</li>
        </ul>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-20 text-white">
      <h1 className="mb-6 text-5xl">😕</h1>

      <h2 className="mb-4 text-3xl font-bold">No movies found</h2>

      <p className="text-gray-400">
        Try another search or use different keywords.
      </p>
    </div>
  );
};

export default EmptyState;
