import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserIsSignIn, selectUsersIsRefreshing } from '../redux/users/selects';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserIsSignIn);
  const isRefreshing = useSelector(selectUsersIsRefreshing);
  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};