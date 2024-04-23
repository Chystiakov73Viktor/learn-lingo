import styled from 'styled-components';

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .buttonLog {
    position: relative;
    padding: 0;
    color: #333;
    border: inherit;
    background-color: inherit;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    outline: none;
  }
  .activeLog::before {
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
  .activeLog {
    color: #3470ff;
  }
  .buttonRegistration {
    border-radius: 12px;
    padding: 14px 39px;
    background: #121417;
    border: transparent;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 125%;
    color: #fff;
  }
`;
