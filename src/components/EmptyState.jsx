const EmptyState = ({ hasSearched }) => {
  if (!hasSearched) {
    return (
      <div className="flex flex-col items-center justify-start pt-10 md:pt-16 text-white">
        <h1 className="text-5xl mb-6">🎬</h1>

        <h2 className="text-3xl font-bold mb-4">
          What would you like to watch today?
        </h2>

        <p className="text-gray-400 mb-8">Try one of these ideas:</p>

        <ul className="space-y-3 text-lg font-extrabold text-gray-200 text-center">
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
      <h1 className="text-5xl mb-6">😕</h1>

      <h2 className="text-3xl font-bold mb-4">No movies found</h2>

      <p className="text-gray-400">
        Try another search or use different keywords.
      </p>
    </div>
  );
};

export default EmptyState;
