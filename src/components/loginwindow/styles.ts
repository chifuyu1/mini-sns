import styled, { css } from 'styled-components';
import {
  FlexJustify,
  FlexJustifyAlignitems,
  InputVirtualEvent,
  LoginWindowSubmitButtonStyleCursor,
} from '../../util/CommonStyle';
import media from '../../util/mediaQuery';
import theme from '../../util/theme';
import test from '../../images/favicon.png';

export const CalcHeight = (height: number = 200) => css`
  height: ${height}px;
  min-width: ${height * 1.414}px;
`;

export const CalcBoxSizing = (height: number = 430) => css`
  min-width: ${height * 1.414}px;
  height: ${height}px;
`;

export const LoginWindowContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  z-index: 9999;
`;

export const LoginWindowWrapper = styled.div<{ darkmode: boolean }>`
  ${FlexJustifyAlignitems};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) =>
    props.darkmode ? theme.dark.login : theme.light.login};
`;

export const LoginWindowBox = styled.div<{ darkmode: boolean }>`
  /* ${CalcBoxSizing()}; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  box-sizing: border-box;
  background: ${(props) =>
    props.darkmode ? theme.dark.hover : theme.light.hover};
  border-radius: 20px;
  ${media.medium} {
    flex: 1;
    height: 100%;
    border-radius: 0;
    background: ${(props) =>
      props.darkmode ? theme.dark.bg : theme.light.text};
  }
  .box {
    display: flex;
    justify-content: center;
  }
  .btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 20px;
    ${media.medium} {
      justify-content: center;
    }
  }
`;

export const LoginWindowPicture = styled.div`
  background-image: url(${test});
  background-size: contain;
  background-repeat: no-repeat;
  min-width: 200px;
  ${media.medium} {
    display: none;
    margin-left: 0;
  }
`;

export const LoginWindowInputDisplay = styled.div<{ darkmode: boolean }>`
  background: #666;
  margin-left: 30px;
  border-radius: 5px;
  /* ${CalcHeight(200)}; */
  box-sizing: border-box;
  background-color: ${(props) =>
    props.darkmode ? theme.dark.box : theme.light.box};
  ${media.medium} {
    margin-left: 0;
  }
`;

export const LoginWindowForm = styled.form<{ darkmode: boolean }>`
  padding: 10px 12px;
  ${FlexJustify};
  flex-direction: column;
  span {
    font-size: 12px;
    margin-bottom: 3px;
  }
  .FormGroup {
    margin: 3px 0;
    width: 100%;
  }
  .FormGroup:first-child {
    margin-top: 0;
  }
  .LoginSubmit {
    ${(props) => LoginWindowSubmitButtonStyleCursor(props.darkmode)}
  }
`;

export const LoginWindowAuthSite = styled.div<{ darkmode: boolean }>`
  width: 100%;
  .GitHubLogin {
    ${(props) => LoginWindowSubmitButtonStyleCursor(props.darkmode)};
    text-decoration: none;
    &:active {
      text-decoration: none;
    }
    & svg {
      margin-right: 6px;
    }
  }
`;

export const LoginWindowInput = styled.input<{ darkmode: boolean }>`
  ${FlexJustifyAlignitems};
  ${(props) => InputVirtualEvent(props.darkmode)};
  width: 100%;
`;

export const LeftMenuLogin = styled.button`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
