import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { auth } from '../utils/fireBase';

export const signUpUser = async ({ email, password, displayName }) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password,
  );

  const user = userCredential.user;

  await updateProfile(user, {
    displayName,
    photoURL: 'https://avatars.githubusercontent.com/u/67315481?v=4',
  });

  await user.reload();

  return user;
};

export const signInUser = async ({ email, password }) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password,
  );

  return userCredential.user;
};
