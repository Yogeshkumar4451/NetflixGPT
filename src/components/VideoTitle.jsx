const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute inset-0 z-20 flex items-center">
      <div className="mt-20 w-full max-w-3xl px-5 sm:px-8 md:mt-0 md:px-16 lg:px-24">
        <h1 className="mb-4 text-2xl font-extrabold leading-tight text-white drop-shadow-2xl sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        <p className="mb-8 hidden max-w-2xl text-sm leading-relaxed text-gray-200 drop-shadow-lg sm:block md:text-base lg:text-lg line-clamp-3">
          {overview}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="cursor-pointer rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-gray-300 md:px-6 md:py-3 md:text-base"
          >
            ▶ Play
          </button>

          <button
            type="button"
            className="cursor-pointer rounded-md bg-gray-600/70 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-500 md:px-6 md:py-3 md:text-base"
          >
            ℹ More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
