const AILoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white">
      <div className="mb-8 h-16 w-16 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />

      <h1 className="mb-4 text-3xl font-bold">🤖 Gemini Is Thinking...</h1>

      <p className="animate-pulse text-lg text-gray-300">
        Finding the perfect movies for you...
      </p>
    </div>
  );
};

export default AILoading;
