import styled from 'styled-components';

export const Wrapper = styled.div`
  .form {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 32px;
  }

  .labelText {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #8a8a89;
  }

  .languagesWidth {
    width: 221px;
  }

  .levelWidth {
    width: 198px;
  }

  .priceWidth {
    width: 124px;
    &::after {
      content: '$';
      color: #121417;
      z-index: 1;
      position: absolute;
      top: 50%;
      left: 40px;
      transform: translateY(-50%);
      display: none;
    }
  }

  .priceWidth.selected::after {
    display: block;
  }
`;

export const CustomStyles = {
  control: provided => ({
    ...provided,
    padding: '10px 14px',
    cursor: 'pointer',
    fontFamily: ['Roboto', 'sans-serif'],
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: 1.11111,
    color: '#121417',
    boxShadow: 'none',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
    backgroundColor: '#f7f7fb',
    outline: 'none',
    borderColor: 'transparent',
    '&:hover': {
      borderColor: 'rgba(18, 20, 23, 0.05)',
    },
    // height: 'auto',
    // [`@media ${device.tablet}`]: {
    //   width: '199px',
    //   fontSize: '17px',
    //   lineHeight: '1.56',
    // },
  }),
  singleValue: provided => ({
    ...provided,
    backgroundColor: '#f7f7fb',
    color: '#121417',
  }),
  valueContainer: provided => ({
    ...provided,
    padding: '0',
  }),
  placeholder: provided => ({
    ...provided,
    padding: 0,
    width: '100%',
    backgroundColor: '#f7f7fb',
    fontFamily: ['Roboto', 'sans-serif'],
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '1.11111',
    color: ' #121417',
  }),
  menu: provided => ({
    ...provided,
    width: '100%',
    fontFamily: ['Roboto', 'sans-serif'],
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: 1.11111,
    color: '#121417',

    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
    backgroundColor: '#f7f7fb',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    padding: 0,
  }),
  clearIndicator: provided => ({
    ...provided,
    padding: 0,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    display: 'none',
  }),
};
