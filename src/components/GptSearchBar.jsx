import { useDispatch, useSelector } from 'react-redux';
import constantLang from '../utils/constantLang';
import { useRef } from 'react';
import { searchMoviesWithAI } from '../utils/gemini';
import { API_OPTIONS } from '../utils/constants';
import {
  addGPTMOVIERESULTS,
  setLoading,
  clearGPTResults,
  setHasSearched,
} from '../app/slices/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const lang = useSelector((store) => store.Config.lang);
  const isLoading = useSelector((store) => store.gpt.isLoading);

  const pointTo = useRef(null);

  const searchMoviesInTMDB = async (movie) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        movie.title,
      )}&primary_release_year=${movie.year}&include_adult=false&language=en-US&page=1`;

      const data = await fetch(url, API_OPTIONS);

      const json = await data.json();

      return json?.results || [];
    } catch (err) {
      console.error('TMDB Error:', err);
      return [];
    }
  };

  const handleGptSearchResult = async () => {
    try {
      const query = pointTo.current.value.trim();

      if (!query) return;

      dispatch(setHasSearched(true));
      dispatch(clearGPTResults());
      dispatch(setLoading(true));

      const text = await searchMoviesWithAI(query);

      if (!text) {
        dispatch(setLoading(false));

        return;
      }

      const responseResult = Array.isArray(text)
        ? text
        : text
            .split(',')
            .map((m) => ({ title: m.trim() }))
            .filter((m) => m.title);

      const data = responseResult.map((movie) => searchMoviesInTMDB(movie));

      const tmdbResults = await Promise.all(data);

      dispatch(
        addGPTMOVIERESULTS({
          movieNames: responseResult,
          movieResults: tmdbResults,
        }),
      );

      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
      console.error('Gemini Error:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[40vh] sm:min-h-[50vh] md:min-h-[60vh] px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGptSearchResult();
        }}
        className="w-full max-w-4xl bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-4 sm:p-6 flex flex-col sm:flex-row gap-3"
      >
        <input
          ref={pointTo}
          type="text"
          className="flex-1 p-3 bg-white rounded-lg outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
          placeholder={constantLang[lang]?.gptSearchPlaceHolder}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full sm:w-auto px-6 py-3 rounded-lg text-white font-semibold transition ${
            isLoading
              ? 'bg-gray-600 cursor-not-allowed'
              : 'bg-red-700 hover:bg-red-800 cursor-pointer'
          }`}
        >
          {isLoading ? 'Searching...' : constantLang[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
