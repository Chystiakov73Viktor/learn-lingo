import styled from 'styled-components';

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
`;
