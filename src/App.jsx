import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/*',
    element: <HomePage />,
  },
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
