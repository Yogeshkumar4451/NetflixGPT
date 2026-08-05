const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="w-full px-5 sm:px-8 md:px-16 lg:px-24 mt-20 md:mt-0 max-w-3xl">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 drop-shadow-2xl">
          {title}
        </h1>

        <p className="hidden sm:block text-gray-200 text-sm md:text-base lg:text-lg leading-relaxed mb-8 max-w-2xl line-clamp-3 drop-shadow-lg">
          {overview}
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-gray-300 transition cursor-pointer">
            ▶ Play
          </button>

          <button className="bg-gray-600/70 text-white px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold text-sm md:text-base hover:bg-gray-500 transition cursor-pointer">
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
