import { createSlice } from '@reduxjs/toolkit';

const ConfigSlice = createSlice({
  name: 'Config',
  initialState: {
    lang: 'en',
  },
  reducers: {
    changeLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export default ConfigSlice.reducer;
export const { changeLang } = ConfigSlice.actions;
