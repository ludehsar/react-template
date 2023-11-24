import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home, _404, Cart } from '@/pages';
import { AppEndpoints } from '@/utils';

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
