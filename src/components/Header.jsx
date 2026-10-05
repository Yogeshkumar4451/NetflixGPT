import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

import { changeLang } from '../app/slices/ConfigSlice';
import { toggleGptSearchView } from '../app/slices/gptSlice';
import { SUPPORTED_LANG } from '../utils/constants';
import { auth } from '../utils/firebase';

const Header = ({ handleClick }) => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error('Sign out failed:', error);
    });
  };

  const handleGPTSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLang(event.target.value));
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-gradient-to-b from-black">
      <div className="flex flex-col items-center justify-between gap-4 px-4 py-3 md:flex-row sm:px-6 md:px-8">
        <img
          className="w-28 sm:w-36 md:w-44"
          src="/NetflixGPT_logo.png"
          alt="Netflix Logo"
        />

        <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:gap-3 md:w-auto md:justify-end">
          {showGPTSearch && (
            <select
              onChange={handleLanguageChange}
              className="cursor-pointer rounded border border-white bg-black/60 px-2 py-2 text-xs text-white sm:px-3 sm:text-sm md:text-base"
            >
              {SUPPORTED_LANG.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          {user && (
            <button
              onClick={handleGPTSearch}
              className="rounded bg-purple-600 px-3 py-2 text-xs font-semibold transition hover:bg-purple-500 sm:px-4 sm:text-sm md:text-base"
            >
              {showGPTSearch ? 'Home Page' : 'GPT Search ✨'}
            </button>
          )}

          <button
            onClick={user ? handleSignOut : handleClick}
            className="cursor-pointer rounded bg-red-600 px-3 py-2 text-xs font-semibold transition hover:bg-red-700 sm:px-4 sm:text-sm md:text-base"
          >
            {user ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
