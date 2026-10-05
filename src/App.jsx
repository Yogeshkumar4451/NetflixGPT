import './index.css';
import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

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
  return <RouterProvider router={appRouter} />;
};

export default App;
