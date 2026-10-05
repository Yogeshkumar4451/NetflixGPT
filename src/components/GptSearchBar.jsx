import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

import constantLang from '../utils/constantLang';
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
      const query = new URLSearchParams({
        query: movie.title,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      });

      if (movie.year) {
        query.set('primary_release_year', movie.year);
      }

      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?${query}`,
        API_OPTIONS,
      );

      if (!response.ok) {
        throw new Error(
          `TMDB request failed: ${response.status} ${response.statusText}`,
        );
      }

      const data = await response.json();

      return data.results ?? [];
    } catch (error) {
      console.error(`Failed to search TMDB for "${movie.title}":`, error);
      return [];
    }
  };

  const handleGptSearchResult = async () => {
    const query = pointTo.current?.value.trim();

    if (!query) return;

    dispatch(setHasSearched(true));
    dispatch(clearGPTResults());
    dispatch(setLoading(true));

    try {
      const movies = await searchMoviesWithAI(query);

      if (!movies?.length) {
        return;
      }

      const results = await Promise.all(
        movies.map((movie) => searchMoviesInTMDB(movie)),
      );

      dispatch(
        addGPTMOVIERESULTS({
          movieNames: movies,
          movieResults: results,
        }),
      );
    } catch (error) {
      console.error('GPT Search failed:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="flex justify-center px-4 py-10 sm:py-14 md:py-16">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleGptSearchResult();
        }}
        className="flex w-full max-w-4xl flex-col gap-3 rounded-xl bg-black/80 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:p-6"
      >
        <input
          ref={pointTo}
          type="text"
          className="flex-1 rounded-lg bg-white p-3 text-sm outline-none focus:ring-2 focus:ring-purple-500 sm:text-base"
          placeholder={constantLang[lang]?.gptSearchPlaceHolder}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full rounded-lg px-6 py-3 font-semibold text-white transition sm:w-auto ${
            isLoading
              ? 'cursor-not-allowed bg-gray-600'
              : 'cursor-pointer bg-red-700 hover:bg-red-800'
          }`}
        >
          {isLoading ? 'Searching...' : constantLang[lang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
