import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
  name: 'gpt',

  initialState: {
    showGPTSearch: false,
    movieNames: [],
    movieResults: [],
    isLoading: false,
    hasSearched: false,
  },

  reducers: {
    toggleGptSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },

    addGPTMOVIERESULTS: (state, action) => {
      const { movieNames, movieResults } = action.payload;

      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },

    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    clearGPTResults: (state) => {
      state.movieNames = [];
      state.movieResults = [];
    },

    setHasSearched: (state, action) => {
      state.hasSearched = action.payload;
    },
  },
});

export const {
  toggleGptSearchView,
  addGPTMOVIERESULTS,
  setLoading,
  clearGPTResults,
  setHasSearched,
} = gptSlice.actions;

export default gptSlice.reducer;
