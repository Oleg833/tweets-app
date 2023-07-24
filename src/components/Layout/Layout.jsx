import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, StNav, StyledNavLink, StyledUl } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <StNav>
          <StyledUl>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/tweets">Tweets page!</StyledNavLink>
            </li>
          </StyledUl>
        </StNav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
