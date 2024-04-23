import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { HeaderWrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <HeaderWrapper>
        <AppBar />
      </HeaderWrapper>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
