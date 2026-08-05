export const checkValid = ({ email, password, displayName, isSignIn }) => {
  if (!email || !password) {
    return 'Email and Password are required';
  }

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isEmailValid) {
    return 'Please enter a valid email address';
  }

  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password,
    );

  if (!isPasswordValid) {
    return 'Password must be 8+ chars with uppercase, lowercase, number & symbol';
  }

  if (!isSignIn) {
    if (!displayName) {
      return 'Name is required';
    }

    const isName =
      /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžæÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
        displayName,
      );

    if (!isName) {
      return 'Please enter a valid name';
    }
  }

  return null;
};
