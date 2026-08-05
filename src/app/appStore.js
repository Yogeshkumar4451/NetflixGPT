import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import moviesReducer from './slices/moviesSlice';
import gptReducer from './slices/gptSlice';
import langReducer from './slices/ConfigSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    Config: langReducer,
  },
});

export default appStore;
