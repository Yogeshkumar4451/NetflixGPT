import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../app/slices/userSlice';
import { LOGO, SUPPORTED_LANG } from '../utils/constants';
import { auth } from '../utils/firebase';
import { toggleGptSearchView } from '../app/slices/gptSlice';
import { changeLang } from '../app/slices/ConfigSlice';

const Header = ({ handleClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  const handleSignout = () => {
    signOut(auth).catch((err) => {
      console.error('Signout Error', err);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          }),
        );
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLang(e.target.value));
  };

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-gradient-to-b from-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4 sm:px-6 md:px-8 py-3">
        <img className="w-28 sm:w-36 md:w-44" src={LOGO} alt="Netflix Logo" />

        <div className="flex flex-wrap justify-center md:justify-end items-center gap-2 sm:gap-3 w-full md:w-auto">
          {showGPTSearch && (
            <select
              onChange={handleLangChange}
              className="px-2 sm:px-3 py-2 text-xs sm:text-sm md:text-base border border-white rounded bg-black/60 text-white cursor-pointer"
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
              onClick={handleGPTSearchClick}
              className="px-3 sm:px-4 py-2 bg-purple-600 rounded font-semibold text-xs sm:text-sm md:text-base hover:bg-purple-500 transition"
            >
              {showGPTSearch ? 'Home Page' : 'GPT Search ✨'}
            </button>
          )}

          <button
            onClick={user ? handleSignout : handleClick}
            className="px-3 sm:px-4 py-2 bg-red-600 rounded font-semibold text-xs sm:text-sm md:text-base hover:bg-red-700 transition"
          >
            {user ? 'Sign Out' : 'Sign In'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
