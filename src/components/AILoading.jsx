const AILoading = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-20 text-white">
      <div className="mb-8 h-16 w-16 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />

      <h2 className="mb-4 text-center text-2xl font-bold sm:text-3xl">
        🤖 Gemini Is Thinking...
      </h2>

      <p className="text-center text-sm text-gray-300 animate-pulse sm:text-lg">
        Finding the perfect movies for you...
      </p>
    </div>
  );
};

export default AILoading;
