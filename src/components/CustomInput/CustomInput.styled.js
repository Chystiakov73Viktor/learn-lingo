import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  margin-bottom: 40px;

  .lebel {
    width: 100%;
    height: 100%;
  }

  .containerLabel {
    position: relative;
  }

  .spanLabel {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
  }

  .input {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 16px 18px 16px 18px;
    width: 100%;
    height: 54px;
    font-size: 16px;
    line-height: 137%;
    color: #121417;
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }

  .inputName {
    padding-left: 92px;
  }

  .inputEmail {
    padding-left: 64px;
  }

  .inputNumber {
    padding-left: 132px;
  }
`;
