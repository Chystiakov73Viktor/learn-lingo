import styled from 'styled-components';
import { device } from '../device';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  &.backdropAvatar {
    background-color: rgba(255, 255, 255, 0);
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: auto;
  }

  & .contentAvatar {
    position: absolute;
    top: 232px;
    left: auto;
    right: 120px;
    overflow: auto;
  }

  &.backdropSignup {
    background-color: rgba(255, 255, 255, 0);
  }

  &.backdropSignin {
    background-color: rgba(255, 255, 255, 0);
  }

  &.backdropNavigationMobile {
    background-color: #fff;
    @media ${device.tablet} {
    display: none;
  }
  }
  
  /* @keyframes slideInFromRight {
  0% {
    transform: translateX(100%); 
  }
  100% {
    transform: translateX(0); 
  }
}

@keyframes slideOutToRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100%); 
  }
}

& .contentNavigationMobile {
  position: absolute;
  background-color: #5ac8fa;
  width: 88px;
  padding:10px;
  top: 6%;
  right: 0;
  transform: translateX(100%);
  overflow: auto;
  animation: slideInFromRight 0.3s forwards; 
} */

`;
