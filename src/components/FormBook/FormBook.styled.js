import styled from 'styled-components';

export const Form = styled.form`
  .buttonSubmit {
    border-radius: 12px;
    padding: 16px 215px;
    width: 100%;
    background-color: #fbe9ba;
    border: transparent;
    font-family: 'Roboto', sans-serif;
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
