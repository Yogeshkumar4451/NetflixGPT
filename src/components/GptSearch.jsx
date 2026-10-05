import GptMovieSuggestions from './GptMovieSuggestions';
import GptSearchBar from './GptSearchBar';

const GptSearch = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="fixed inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="Netflix Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="px-4 pt-28 sm:pt-32 md:pt-36">
        <GptSearchBar />
      </div>

      <div className="pb-8 sm:pb-10 md:pb-16">
        <GptMovieSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
