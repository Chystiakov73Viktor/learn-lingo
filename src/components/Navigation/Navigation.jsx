import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { NavMobileWrapper, NavWrapper } from './Navigation.styled';
import { selectUserIsSignIn } from '../../redux/users/selects';

export const  Navigation = () => {
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


export const NavigationMobile = ({ setIsMenuOpen }) => {
  const isLoading = useSelector(selectUserIsSignIn);
  return (
    <NavMobileWrapper>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className="navigation-link"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        onClick={() => setIsMenuOpen(false)}
        className="navigation-link"
        to="/teachers"
      >
        Teachers
      </NavLink>
      {isLoading && (
        <NavLink
          onClick={() => setIsMenuOpen(false)}
          className="navigation-link"
          to="/favorites"
        >
          Favorites
        </NavLink>
      )}
    </NavMobileWrapper>
  );
};
