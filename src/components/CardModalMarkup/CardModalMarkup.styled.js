import styled from 'styled-components';

export const LiWrapper = styled.li`
  position: relative;
  border-radius: 30px;
  padding: 64px;
  width: 600px;
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

  .titleBook {
    font-weight: 500;
    font-size: 40px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 20px;
  }
  .textBook {
    font-size: 16px;
    line-height: 137%;
    color: rgba(18, 20, 23, 0.8);
    margin-bottom: 20px;
  }

  .containerAvatar {
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
  }

  .avatarUrl {
    border-radius: 100px;
    width: 44px;
    height: 44px;
  }

  .containerName {
    display: flex;
    flex-direction: column;
  }

  .textYour {
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    color: #8a8a89;
    margin-bottom: 4px;
  }

  .textName {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .titleGoal {
    font-weight: 500;
    font-size: 24px;
    line-height: 133%;
    color: #121417;
    margin-bottom: 20px;
  }
`;
