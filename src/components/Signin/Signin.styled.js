import styled from 'styled-components';

export const SigninPageWrapper = styled.div`
  position: relative;
  border-radius: 30px;
  width: 566px;
  padding: 64px;
  background: #fff;
  .buttonIcon {
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }
  .signinTitle {
    font-family: 'Manrope', sans-serif;
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 20px;
  }
  .signinText {
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: rgba(18, 20, 23, 0.8);
    margin-bottom: 40px;
  }
  .signinForm {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }
  .inputSignin {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 16px 18px;
    width: 100%;
    height: 54px;
    font-family: 'Manrope', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 137%;
    color: #121417;
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }
  .buttonSignin {
    border-radius: 12px;
    padding: 16px;
    width: 100%;
    background-color: #fbe9ba;
    border: transparent;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;
    &:focus,
    &:hover {
      background-color: #f4c550;
    }
  }
`;
