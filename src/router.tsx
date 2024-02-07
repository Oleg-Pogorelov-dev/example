import { createBrowserRouter } from 'react-router-dom';
import TablePage from './pages/table-page';
import Auth from './pages/auth';
import PageNotFound from './pages/page-not-found';
import SurveyPage from './pages/survey-page';
import Layout from './layout';
import ProcedurePage from './pages/procedure-page';
import ReabilitationStatusPage from './pages/reabilitation-page';

const useRouter = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          index: true,
          element: <TablePage />,
        },
        {
          path: 'survey/:ehrCaseId/:nazId',
          element: <SurveyPage />,
        },
        {
          path: 'procedure/:ehrCaseId/:nazId',
          element: <ProcedurePage />,
        },
        {
          path: '/medhistory/:ehrCaseId/rehabilitation',
          element: <ReabilitationStatusPage />,
        },
        {
          path: '/login',
          element: <Auth />,
        },
      ],
      errorElement: <PageNotFound />,
    },
  ]);
  return router;
};
export default useRouter;
