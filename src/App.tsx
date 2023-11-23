import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, _404, Home } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <_404 />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
