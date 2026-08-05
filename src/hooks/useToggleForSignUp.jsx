import { useState } from 'react';

const useToggleForSignUp = () => {
  const [isSignIn, setIsSignIn] = useState(false);

  const toggleSignUp = () => {
    setIsSignIn((prev) => !prev);
  };

  return {
    isSignIn,
    toggleSignUp,
  };
};

export default useToggleForSignUp;
