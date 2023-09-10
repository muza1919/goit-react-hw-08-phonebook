import React from 'react';

import { AuthLink } from './AuthNav.styled';

function AuthNav() {
  return (
    <div>
      <AuthLink to="/register">Register</AuthLink>
      <AuthLink to="/login">Login</AuthLink>
    </div>
  );
}

export default AuthNav;
