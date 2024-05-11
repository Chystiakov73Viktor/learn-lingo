import styled from 'styled-components';
import { device } from '../device';

export const LiWrapper = styled.li`
  position: relative;
  border-radius: 24px;
  padding: 24px;
  background: #fff;

  @media ${device.tablet} {
    display: flex;
  }

  .buttonIcon {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 0;
    background-color: transparent;
    border: transparent;
    cursor: pointer;
  }

  .avatar {
    position: relative;
    margin: auto;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    border: 3px solid #fbe9ba;
    border-radius: 100px;
    width: 120px;
    height: 120px;
  }

  @media ${device.tablet} {
    .avatar {
      margin: 0;
      margin-right: 48px;
      margin-bottom: 0;
    }
  }

  .avatarUrl {
    border-radius: 100px;
    width: 96px;
    height: 96px;
  }

  .avatarEllipse {
    position: absolute;
    top: 21px;
    right: 19px;
    transform: translate(-50%, -50%);
  }

  .avatarEllipseOutline {
    position: absolute;
    top: 23px;
    right: 15px;
    transform: translate(-50%, -50%);
  }

  .containerInfo {
    flex: 1;
  }

  .listInfo {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 8px;
  }

  .itemInfo {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #121417;
  }

  .itemInfo:first-child {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }
  @media ${device.tablet} {
    .itemInfo:first-child {
      margin-right: 16px;
    }
  }
  @media ${device.desktop} {
    .itemInfo:first-child {
      margin-right: 192px;
    }
  }

  .itemInfo:not(:first-child):not(:last-child)::after {
    content: '|';
    width: 1px;
    color: rgba(18, 20, 23, 0.2);
    margin-left: 16px;
    margin-right: 16px;
  }

  .bookIcon {
    margin-right: 4px;
  }

  .starIcon {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }

  .price {
    color: #38cd3e;
  }

  .listName {
    display: flex;
    gap: 5px;
    margin-bottom: 32px;
  }

  .titleName {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    color: #121417;
  }

  .listSpeaks {
    margin-bottom: 16px;
  }

  .itemSpeaks {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }

  .itemSpeaks:not(:last-child) {
    margin-bottom: 8px;
  }

  .languages {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #121417;
  }

  .lesson {
    color: #121417;
  }

  .buttonReadMore {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #121417;
    border: transparent;
    background: inherit;
    margin-bottom: 32px;
    outline: none;
  }

  .textExperience {
    margin-bottom: 32px;
  }

  .containerReviews {
    display: flex;
    gap: 12px;
  }

  .containerRating {
    display: flex;
    flex-direction: column;
  }

  .textReniewerName {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #8a8a89;
  }

  .textReniewerRating {
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    color: #121417;
  }

  .avatarReviews {
    border-radius: 100px;
    width: 44px;
    height: 44px;
    margin-bottom: 16px;
  }

  .textReviews {
    margin-bottom: 32px;
  }

  .listButton {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .levelButton {
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
    background-color: inherit;
    padding: 8px 12px;
    transition: background-color 300ms linear, box-shadow 300ms linear;
  }

  .levelButton.selected {
    background-color: #f4c550;
  }

  .levelButton:focus,
  .levelButton:hover {
    background-color: #f4c550;
  }

  .buttonTrialLesson {
    font-family: 'Roboto', sans-serif;
    padding: 16px 48px;
    background-color: #fbe9ba;
    border: transparent;
    border-radius: 12px;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
    margin-top: 32px;
    transition: background-color 300ms linear, box-shadow 300ms linear;
    &:focus,
    &:hover {
      background-color: #f4c550;
    }
  }
`;
