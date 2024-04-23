import styled from 'styled-components';

export const DivWrapper = styled.div`
  position: relative;
  border-radius: 15px;
  padding: 24px;
  width: 300px;
  background: #f8f8f8;

  .buttonClose {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .formAvatar {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .containerImg {
    position: relative;
  }

  .customUploadLabel {
    display: inline-block;
    cursor: pointer;
  }

  .imgAvatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
  }

  .labelText {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #333;
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

  .inputNameUser {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 10px 18px 12px 68px;
    width: 100%;
    height: 38px;
    font-size: 16px;
    line-height: 137%;
    color: #121417;
    &:focus {
      outline: none;
      border: 1px solid rgba(18, 20, 23, 0.05);
    }
  }

  .btnSubmit {
    border-radius: 12px;
    padding: 6px 12px;
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
