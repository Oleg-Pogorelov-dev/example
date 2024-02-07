import { RouterProvider } from 'react-router-dom';
import useRouter from './router';

const App = () => {
  const router = useRouter();
  return <RouterProvider router={router} />;
};

export default App;
