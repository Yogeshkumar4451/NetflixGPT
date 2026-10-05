import { useRef } from 'react';

import useAuthHandler from '../hooks/useAuthHandler';
import useToggleForSignUp from '../hooks/useToggleForSignUp';
import Footer from './Footer';

const inputClassName =
  'mb-4 w-full rounded bg-gray-700 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600';

const Login = ({ showForm }) => {
  const { isSignIn, toggleSignUp } = useToggleForSignUp();
  const { handleAuth, error } = useAuthHandler(isSignIn);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const displayNameRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    handleAuth({
      email: emailRef.current.value.trim(),
      password: passwordRef.current.value.trim(),
      displayName: displayNameRef.current?.value.trim() || '',
    });
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden text-white">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="Netflix Background"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-24">
        {showForm ? (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md rounded-xl bg-black/80 p-8 shadow-2xl backdrop-blur-md"
          >
            <h1 className="mb-8 text-3xl font-bold">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h1>

            {!isSignIn && (
              <input
                ref={displayNameRef}
                type="text"
                placeholder="Full Name"
                className={inputClassName}
              />
            )}

            <input
              ref={emailRef}
              type="email"
              placeholder="Email Address"
              className={inputClassName}
            />

            <input
              ref={passwordRef}
              type="password"
              placeholder="Password"
              className="mb-5 w-full rounded bg-gray-700 p-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-red-600"
            />

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full cursor-pointer rounded bg-red-600 py-3 font-bold transition hover:scale-[1.02] hover:bg-red-700 active:scale-95"
            >
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>

            <p className="mt-6 text-sm text-gray-400">
              {isSignIn ? 'New to NetflixGPT?' : 'Already have an account?'}

              <button
                type="button"
                onClick={toggleSignUp}
                className="ml-1 cursor-pointer font-semibold text-white hover:underline"
              >
                {isSignIn ? 'Sign Up Now' : 'Sign In'}
              </button>
            </p>
          </form>
        ) : (
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Unlimited Movies,
              <br />
              TV Shows &
              <span className="text-red-600"> AI Recommendations</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 sm:text-xl">
              Discover trending movies and get personalized recommendations
              powered by Gemini AI.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="cursor-pointer rounded-lg bg-black/60 px-6 py-4 backdrop-blur-md">
                🎬 Browse Trending Movies
              </div>

              <div className="cursor-pointer rounded-lg bg-black/60 px-6 py-4 backdrop-blur-md">
                🤖 AI Movie Search
              </div>

              <div className="cursor-pointer rounded-lg bg-black/60 px-6 py-4 backdrop-blur-md">
                ▶ Watch Trailers
              </div>

              <div className="cursor-pointer rounded-lg bg-black/60 px-6 py-4 backdrop-blur-md">
                🌍 Multi-language Support
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Login;
