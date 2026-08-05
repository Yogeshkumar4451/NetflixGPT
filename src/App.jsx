import './index.css';
import Header from './components/Header';
import Login from './components/Login';
import Browse from './components/Browse';
import {useState } from "react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {

  const [showForm, setShowForm] = useState(false);
  
  const handleFormVisible = () => {
    setShowForm(true);
  };

  

  const appRouter = createBrowserRouter([
  { 
    path: "/",  
    element: (
      <PublicRoute>
        <>
          <Header handleClick={handleFormVisible}/>
          <Login dataOfState={showForm}/>
        </>
      </PublicRoute>
    )
  },
  { 
    path: "/browse",  
    element: (
      <ProtectedRoute>
        <>
          <Header />
          <Browse/>
        </>
      </ProtectedRoute>
    )
  },
]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;