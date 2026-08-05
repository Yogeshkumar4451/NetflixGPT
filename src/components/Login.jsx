import { useRef } from 'react';
import useAuthHandler from '../hooks/useAuthHandler';
import useToggleForSignUp from '../hooks/useToggleForSignup';

const Login = ({ dataOfState }) => {
  const { isSignIn, toggleSignUp } = useToggleForSignUp(false);
  const { handleAuth, error } = useAuthHandler(isSignIn);

  const email = useRef(null);
  const password = useRef(null);
  const displayName = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();

    handleAuth({
      email: email.current.value.trim(),
      password: password.current.value.trim(),
      displayName: displayName.current?.value || '',
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="Netflix Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Form */}
      <div className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6">
        {dataOfState && (
          <form
            onSubmit={onSubmit}
            className="w-full max-w-sm sm:max-w-md rounded-xl bg-black/80 backdrop-blur-md p-6 sm:p-8 md:p-10 shadow-2xl"
          >
            <h1 className="mb-8 text-3xl font-bold">
              {isSignIn ? 'Sign In' : 'Sign Up'}
            </h1>

            {!isSignIn && (
              <input
                ref={displayName}
                type="text"
                placeholder="Full Name"
                className="mb-4 w-full rounded bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-600"
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="mb-4 w-full rounded bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-600"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="mb-5 w-full rounded bg-gray-700 p-3 text-white placeholder-gray-400 outline-none transition focus:ring-2 focus:ring-red-600"
            />

            {error && (
              <p className="mb-4 text-sm text-red-500 sm:text-base">{error}</p>
            )}

            <button className="w-full rounded bg-red-600 py-3 font-bold transition duration-300 hover:scale-[1.02] hover:bg-red-700 active:scale-95 cursor-pointer">
              {isSignIn ? 'Sign In' : 'Create Account'}
            </button>

            <p className="mt-6 text-sm text-gray-400">
              {isSignIn ? 'New to NetflixGPT?' : 'Already have an account?'}

              <span
                onClick={toggleSignUp}
                className="ml-1 cursor-pointer font-semibold text-white hover:underline"
              >
                {isSignIn ? 'Sign Up Now' : 'Sign In'}
              </span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
