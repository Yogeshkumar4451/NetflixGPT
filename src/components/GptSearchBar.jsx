import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  addGPTMOVIERESULTS,
  clearGPTResults,
  setHasSearched,
  setLoading,
} from '../app/slices/gptSlice';

import constantLang from '../utils/constantLang';
import { API_OPTIONS } from '../utils/constants';
import { searchMoviesWithAI } from '../utils/gemini';

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

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const lang = useSelector((store) => store.Config.lang);
  const isLoading = useSelector((store) => store.gpt.isLoading);

  const searchInput = useRef(null);

  const handleSearch = async () => {
    const query = searchInput.current?.value.trim();

    if (!query) return;

    dispatch(setHasSearched(true));
    dispatch(clearGPTResults());
    dispatch(setLoading(true));

    try {
      const movies = await searchMoviesWithAI(query);

      if (!movies.length) return;

      const movieResults = await Promise.all(movies.map(searchMoviesInTMDB));

      dispatch(
        addGPTMOVIERESULTS({
          movieNames: movies,
          movieResults,
        }),
      );
    } catch (error) {
      console.error('GPT Search failed:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <div className="flex justify-center px-4 py-10 sm:py-14 md:py-16">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-4xl flex-col gap-3 rounded-xl bg-black/80 p-4 shadow-lg backdrop-blur-md sm:flex-row sm:p-6"
      >
        <input
          ref={searchInput}
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
