import { FC, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const Layout: FC = () => {
  const nav = useNavigate();
  const deptId = localStorage.getItem('deptId');

  useEffect(() => {
    if (!deptId) {
      nav('/login');
    }
  }, []);

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
