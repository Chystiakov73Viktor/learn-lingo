import styled from 'styled-components';
import { device } from '../device';

export const NavWrapper = styled.nav`
  display: none;

  @media ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .navigation-link {
    position: relative;
    color: #333;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
  .active::before {
    content: '';
    position: absolute;
    bottom: -32px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #3470ff;
  }
  .active {
    color: #3470ff;
  }
`;

export const NavMobileWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.tablet} {
    display: none;
  }

  .navigation-link {
    color: #333;
    text-decoration: none;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;
