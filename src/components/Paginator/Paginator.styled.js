import styled from 'styled-components';

export const WrapperDiv = styled.div`
  .containerButton {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .button {
    display: block;
    padding: 12px 20px;
    background: #fbe9ba;
    border: transparent;
    border-radius: 12px;
    font-family: 'Roboto', sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.42857;
    color: #121417;
    transition:
      background-color 300ms linear,
      box-shadow 300ms linear;
    &:hover {
      background-color: #f4c550;
      outline: 1px solid #f3f3f3;
    }
  }
`;
