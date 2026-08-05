export const LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/f/fd/Netflix-Logo.png';

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_AUTHORIZATION,
  },
};

export const POSTER_URL = 'https://image.tmdb.org/t/p/w400';

export const SUPPORTED_LANG = [
  { identifier: 'en', name: 'English' },
  { identifier: 'hindi', name: 'Hindi' },
];

export const OPEN_AI_KEYS = import.meta.env.VITE_OPEN_AI_KEYS;
