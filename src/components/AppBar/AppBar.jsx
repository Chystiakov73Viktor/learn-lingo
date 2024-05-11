import { useState } from 'react';
import { DivWrapper } from './AppBar.styled';
import { Container } from '../Container/Container';
import { Navigation, NavigationMobile } from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectUserIsSignIn } from '../../redux/users/selects';
import UserMenu from '../UserMenu/UserMenu';
import { Logo } from '../Logo/Logo';
import { CiLogin } from 'react-icons/ci';
import { FiMenu } from 'react-icons/fi';
import { Modal } from 'components/Modal/Modal';

export const AppBar = () => {
  const isSignin = useSelector(selectUserIsSignIn);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log('isMenuOpen: ', isMenuOpen);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Container>
      <DivWrapper>
        <Logo />
        <div className="mobileMenuIcon" onClick={toggleMenu}>
          <FiMenu size="24" />
        </div>
        {isMenuOpen && (
          <Modal
            onClose={closeMenu}
            backdropClassName="backdropNavigationMobile"
            contentClassName="contentNavigationMobile"
          >
            <NavigationMobile setIsMenuOpen={setIsMenuOpen} />
          </Modal>
        )}
        <Navigation />
        <div className="logWrapper">
          {!isSignin && <CiLogin size="20" style={{ color: '#f4c550' }} />}
          {isSignin ? <UserMenu /> : <AuthNav />}
        </div>
      </DivWrapper>
    </Container>
  );
};
