import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../app/slices/userSlice';
import getAuthErrorMessage from '../utils/authErrorHandler';
import { signInUser, signUpUser } from '../utils/authService';
import { checkValid } from '../utils/validation';

const useAuthHandler = (isSignIn) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAuth = async ({ email, password, displayName }) => {
    const message = checkValid({
      email,
      password,
      displayName,
      isSignIn,
    });

    if (message) {
      setError(message);
      return;
    }

    try {
      let user;

      if (isSignIn) {
        user = await signInUser({ email, password });
      } else {
        user = await signUpUser({ email, password, displayName });
      }

      dispatch(
        addUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
        }),
      );

      setError(null);
    } catch (err) {
      setError(getAuthErrorMessage(err.code));
    }
  };

  return { handleAuth, error };
};

export default useAuthHandler;
