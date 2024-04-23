import { useSelector } from 'react-redux';
import { selectUserIsSignIn } from '../redux/users/selects';
import { Navigate } from 'react-router-dom';

export const RestricteRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectUserIsSignIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};