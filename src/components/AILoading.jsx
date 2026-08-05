const AILoading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-white">
      <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin mb-8"></div>

      <h1 className="text-3xl font-bold mb-4">🤖 Gemini Is Thinking...</h1>

      <p className="text-gray-300 text-lg animate-pulse">
        Finding the perfect movies for you...
      </p>
    </div>
  );
};

export default AILoading;
