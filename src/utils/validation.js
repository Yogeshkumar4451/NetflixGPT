export const checkValid = ({ email, password, displayName, isSignIn }) => {
  if (!email || !password) {
    return 'Email and Password are required';
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return 'Please enter a valid email address';
  }

  if (!isSignIn) {
    if (password.length < 8) {
      return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
    }

    if (!/[A-Z]/.test(password)) {
      return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
    }

    if (!/[a-z]/.test(password)) {
      return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
    }

    if (!/[0-9]/.test(password)) {
      return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
    }

    if (!/[#?!@$%^&*-]/.test(password)) {
      return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
    }

    if (!displayName) {
      return 'Name is required';
    }

    const namePattern = /^[\p{L} ,.'-]+$/u;

    if (!namePattern.test(displayName)) {
      return 'Please enter a valid name';
    }
  }

  return null;
};
