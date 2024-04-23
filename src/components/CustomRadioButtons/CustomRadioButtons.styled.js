import styled from 'styled-components';

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 17px;
  margin-bottom: 40px;

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border: 2px solid rgba(18, 20, 23, 0.2);
    outline: none;
    margin: 0;
    margin-right: 8px;
    cursor: pointer;
  }

  input[type='radio']:checked {
    border: 2px solid #f4c550;
  }

  input[type='radio']:checked::before {
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: #f4c550;
    border-radius: 50%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .labelRadio {
    display: flex;
    align-items: center;
    font-size: 16px;
    line-height: 137%;
    text-align: center;
    color: #121417;
  }
`;
