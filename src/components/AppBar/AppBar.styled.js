import styled from 'styled-components';
import { device } from '../device';

export const DivWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

 

  .logWrapper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .mobileMenuIcon {
    display: block;
    cursor: pointer;
  }

  @media ${device.tablet} {
    .mobileMenuIcon {
      display: none;
    }
  }
`;
