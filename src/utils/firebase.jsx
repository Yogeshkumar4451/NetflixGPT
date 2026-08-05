import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

const firebaseConfig = {
  apiKey: 'AIzaSyAujDYqKMyl1x4pHeAJOkuaueeEbMpFCFg',
  authDomain: 'netflixgpt-fdca2.firebaseapp.com',
  projectId: 'netflixgpt-fdca2',
  storageBucket: 'netflixgpt-fdca2.firebasestorage.app',
  messagingSenderId: '1044113253383',
  appId: '1:1044113253383:web:4533078b430fa9b064f6a2',
  measurementId: 'G-YC67S2GB75',
};

const app = initializeApp(firebaseConfig);

if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider(import.meta.env.VITE_RECAPTCHA_SITE_KEY),
  isTokenAutoRefreshEnabled: true,
});

const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
