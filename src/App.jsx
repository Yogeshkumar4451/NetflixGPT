import './index.css';
import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';

import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

import { addUser, removeUser } from './app/slices/userSlice';
import { auth } from './utils/firebase';

const LoginPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header handleClick={() => setShowForm(true)} />
      <Login showForm={showForm} />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: '/browse',
    element: (
      <ProtectedRoute>
        <>
          <Header />
          <Browse />
        </>
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        dispatch(
          addUser({
            uid: currentUser.uid,
            email: currentUser.email,
            displayName: currentUser.displayName,
          }),
        );
      } else {
        dispatch(removeUser());
      }

      setAuthLoading(false);
    });

    return unsubscribe;
  }, [dispatch]);

  if (authLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="mx-auto mb-5 h-14 w-14 animate-spin rounded-full border-4 border-red-600 border-t-transparent" />
          <h1 className="text-2xl font-bold">Loading NetflixGPT...</h1>
        </div>
      </div>
    );
  }

  return <RouterProvider router={appRouter} />;
};

export default App;
