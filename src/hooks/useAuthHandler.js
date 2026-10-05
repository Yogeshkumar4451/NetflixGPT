import { useState } from 'react';

import getAuthErrorMessage from '../utils/authErrorHandler';
import { signInUser, signUpUser } from '../utils/authService';
import { checkValid } from '../utils/validation';

const useAuthHandler = (isSignIn) => {
  const [error, setError] = useState(null);

  const handleAuth = async ({ email, password, displayName }) => {
    const validationError = checkValid({
      email,
      password,
      displayName,
      isSignIn,
    });

    if (validationError) {
      setError(validationError);
      return;
    }

    setError(null);

    try {
      if (isSignIn) {
        await signInUser({ email, password });
        return;
      }

      await signUpUser({
        email,
        password,
        displayName,
      });
    } catch (authError) {
      setError(getAuthErrorMessage(authError.code));
    }
  };

  return {
    handleAuth,
    error,
  };
};

export default useAuthHandler;
