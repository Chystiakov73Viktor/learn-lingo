import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavWrapper } from './Navigation.styled';
import { selectUserIsSignIn } from '../../redux/users/selects';

const Navigation = () => {
  const isLoading = useSelector(selectUserIsSignIn);
  return (
    <NavWrapper>
      <NavLink className="navigation-link" to="/">
        Home
      </NavLink>
      <NavLink className="navigation-link" to="/teachers">
        Teachers
      </NavLink>
      {isLoading && (
        <NavLink className="navigation-link" to="/favorites">
          Favorites
        </NavLink>
      )}
    </NavWrapper>
  );
};

export default Navigation;
