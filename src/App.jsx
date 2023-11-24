import HistoryPage from './pages/HistoryPage';
import HomePage from './pages/HomePage';
import LoadMoney from './pages/LoadMoney';
import Cards from './pages/Cards';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

const routes = createBrowserRouter([
  {path: '/', element: <HomePage />},
  {path: '/:reference', element: <HistoryPage />},
  {path: '/loadMoney', element: <LoadMoney />},
  {path: '/cards', element: <Cards />},
]);

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
