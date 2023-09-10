import React from 'react';
import { MenuLink } from './Navigtion.styled';
import { useAuth } from '../../hooks';

function Navigation() {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <MenuLink to="/">Main</MenuLink>
      {isLoggedIn && <MenuLink to="/contacts">Contacts</MenuLink>}
    </nav>
  );
}

export default Navigation;
