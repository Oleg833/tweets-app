import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  color: #fff;
  background-color: blanchedalmond;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  z-index: 1;
`;

export const StNav = styled.nav`
  margin: 0;
  padding: 20px;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
  font-size: 500;
  border: 2px solid burlywood;
  border-radius: 5px;
  color: blueviolet;
  background-color: blanchedalmond;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
