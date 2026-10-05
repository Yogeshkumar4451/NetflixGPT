export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTHORIZATION}`,
  },
};

export const POSTER_URL = 'https://image.tmdb.org/t/p/w400';

export const SUPPORTED_LANG = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
];
