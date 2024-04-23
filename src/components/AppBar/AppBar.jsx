import { DivWrapper } from './AppBar.styled';
import { Container } from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import { selectUserIsSignIn } from '../../redux/users/selects';
import UserMenu from '../UserMenu/UserMenu';
import { Logo } from '../Logo/Logo';
import { CiLogin } from 'react-icons/ci';

export const AppBar = () => {
  const isSignin = useSelector(selectUserIsSignIn);

  return (
    <Container>
      <DivWrapper>
        <Logo />
        <Navigation />
        <div className="logWrapper">
          {!isSignin && <CiLogin size="20" style={{ color: '#f4c550' }} />}
          {isSignin ? <UserMenu /> : <AuthNav />}
        </div>
      </DivWrapper>
    </Container>
  );
};
