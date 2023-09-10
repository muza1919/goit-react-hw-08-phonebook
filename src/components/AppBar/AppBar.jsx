import React from 'react';
import { useAuth } from '../../hooks';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import Navigation from 'components/Navigation';
import { Head } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Head>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Head>
  );
};

export default AppBar;
