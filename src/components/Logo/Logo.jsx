import { WrapperDiv } from './Logo.styled';
import flag from '../../images/ukraine.svg';

export const Logo = () => {
  return (
    <WrapperDiv>
      <img src={flag} alt="flag" width="28" />
      <h2 className="titleLogo">LearnLingo</h2>
    </WrapperDiv>
  );
};
