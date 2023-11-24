import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, _404, Home } from './pages';
import { AppEndpoints } from './utils';

const router = createBrowserRouter([
  {
    path: AppEndpoints.HOME,
    element: <Home />,
    errorElement: <_404 />,
  },
  {
    path: AppEndpoints.CART,
    element: <Cart />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
