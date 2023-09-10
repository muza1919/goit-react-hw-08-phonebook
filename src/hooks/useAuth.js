import { useSelector } from 'react-redux';

import { authSelectors } from '../redux/auth';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(authSelectors.selectIsLoggedIn),
    isRefreshing: useSelector(authSelectors.selectIsRefreshing),
    user: useSelector(authSelectors.selectUsername),
  };
};
