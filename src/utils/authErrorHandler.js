const errorMap = {
  'auth/email-already-in-use': 'This email is already registered.',
  'auth/invalid-email': 'Please enter a valid email address.',
  'auth/user-not-found': 'No account found with this email.',
  'auth/wrong-password': 'Incorrect password.',
  'auth/invalid-credential': 'Invalid email or password.',
  'auth/user-disabled': 'This account has been disabled.',
  'auth/weak-password': 'Password is too weak.',
  'auth/too-many-requests': 'Too many attempts. Try later.',
  'auth/network-request-failed': 'Check your internet connection.',
};

const getAuthErrorMessage = (code) => {
  if (!errorMap[code]) {
    console.error('Unhandled Auth Error:', code);
  }

  return errorMap[code] || 'Something went wrong.';
};

export default getAuthErrorMessage;
