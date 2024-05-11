import styled from 'styled-components';
import { device } from '../device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background: #fff;

  .wrapperTextImg {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: calc(100% + 128px);
    margin-left: -64px;
    margin-right: -64px;
  }
  
  @media ${device.desktop} {
    .wrapperTextImg {
      flex-wrap: nowrap;
    }
  }

  .containerText {
    flex: 1;
    border-radius: 30px;
    background: #f8f8f8;
    padding: 98px 108px 98px 64px;
  }

  .imgWrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;
    width: 100%;
    height: 530px;
    background: ${({ $randomLightColor }) => $randomLightColor};
  }

  .img {
    width: 339px;
    height: 339px;
    border-radius: 30px;
    object-fit: cover;
  }

  .containerApple {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    width: 361px;
    height: 160px;
    background: ${({ $randomDarkColor }) => $randomDarkColor};
  }

  .title {
    font-weight: 500;
    font-size: 48px;
    line-height: 117%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 32px;
  }

  @media ${device.tablet} {
    .title {
      width: 548px;
    }
  }

  .buttonTitle {
    height: auto;
    font-family: 'Roboto', sans-serif;
    font-size: 48px;
    line-height: 72%;
    letter-spacing: -0.02em;
    color: #121417;
    font-style: italic;
    border: transparent;
    border-radius: 12px;
    background: ${({ $randomLightColor }) => $randomLightColor};
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;

    &:focus,
    &:hover {
      background: ${({ $randomDarkColor }) => $randomDarkColor};
      outline: 1px solid #f3f3f3;
    }
  }

  .text {
    font-size: 16px;
    line-height: 137%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 64px;
  }

  @media ${device.tablet} {
    .text {
      width: 471px;
    }
  }

  .buttonStarted {
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
    border-radius: 12px;
    padding: 16px 88px;
    border: none;
    background: ${({ $randomLightColor }) => $randomLightColor};
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;

    &:focus,
    &:hover {
      background: ${({ $randomDarkColor }) => $randomDarkColor};
      outline: 1px solid #f3f3f3;
    }
  }

  .listTutors {
    display: none;
  }

  @media ${device.desktop} {
  .listTutors {
    display: flex;
    align-items: center;
    gap: 100px;
    width: calc(100% + 128px);
    margin-left: -64px;
    margin-right: -64px;
    padding: 40px 123px;
    border: 1.5px dashed ${({ randomLightColor }) => randomLightColor};
    border-radius: 30px;
  }

  .itemTutors {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .titleTutors {
    font-weight: 500;
    font-size: 28px;
    line-height: 114%;
    letter-spacing: -0.02em;
    color: #121417;
  }

  .titleTutors::after {
    content: '+';
    margin-left: 5px;
  }

  .textTutors {
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.7);
  }
}
`;

export const Button = styled.button``;
