import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks';

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({ component, redirectTo = '/' }) {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? component : <Navigate to={redirectTo} />;
}
