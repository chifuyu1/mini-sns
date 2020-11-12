import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';
import media from './mediaQuery';

export const FlexJustify = () => css`
  display: flex;
  justify-content: center;
`;

export const FlexJustifyAlignitems = () => css`
  ${FlexJustify};
  align-items: center;
`;

export const LeftMenuFlexGrow = (flex: number = 1) => css`
  display: flex;
  flex: ${flex};
`;

// Input Style
export const InputCommonStyle = (darkmode: boolean = false) => css`
  font-size: 16px;
  height: 26px;
  box-sizing: border-box;
  padding: 0px 10px;
  border-radius: 4px;
  border: none;
  color: #333;
`;

/* background: ${darkmode ? theme.dark.bg : theme.light.box}; */
/* color: ${darkmode ? theme.dark.text : theme.light.text}; */
export const InputVirtualEvent = (darkmode: boolean = false) => css`
  ${(darkmode) =>
    darkmode ? InputCommonStyle(true) : InputCommonStyle(false)};
  &:focus {
    outline: ${darkmode ? theme.dark.bg : theme.light.bg};
    border-color: ${darkmode ? theme.dark.bg : theme.light.bg};
    box-shadow: ${darkmode ? theme.dark.shadow : theme.light.shadow};
  }
  &:active {
    background-color: ${darkmode ? theme.dark.active : theme.light.active};
    border: none;
  }
  &::placeholder {
    text-align: center;
  }
`;

export const InputVirtualNotEvent = () => css`
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
  }
  &:active {
    background: none;
  }
`;

// Submit Style
export const CommentSubmitButtonStyle = (darkmode: boolean = false) => css`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 50px;
  height: 26px;
  align-items: center;
  box-sizing: border-box;
  margin-left: 10px;
  border: none;
  border-radius: 10px;
  outline: none;
  background: ${darkmode ? theme.dark.bg : theme.light.bg};
  color: ${darkmode ? theme.dark.text : theme.light.text};
  font-size: 14px;
  font-weight: 500;
  ${media.medium} {
    font-size: 12px;
  }
`;

export const LoginWindowSubmitButtonStyle = (darkmode: boolean) => css`
  ${FlexJustifyAlignitems};
  ${(darkmode) =>
    darkmode ? InputVirtualEvent(true) : InputVirtualEvent(false)};
  width: 100%;
  background-color: ${darkmode ? theme.dark.bg : theme.light.bg};
  color: ${darkmode ? theme.dark.text : theme.light.text};
  border: none;
  margin-top: 5px;
  margin-bottom: 5px;
  &::placeholder {
    text-align: center;
    font-weight: 600;
  }
  svg {
    font-size: 18px;
    /* margin-right: 6px; */
    background: transparent;
  }
`;

export const LoginWindowSubmitButtonStyleCursor = (darkmode: boolean) => css`
  ${LoginWindowSubmitButtonStyle(darkmode)};
  cursor: pointer;
`;

// li Style
export const MenuListStyle = (
  darkmode: boolean = false,
  fontSize: number = 18,
) => css`
  list-style: none;
  ${media.small} {
    display: flex;
  }
  button {
    align-items: center;
    border-radius: 4px;
    line-height: 1.5;
    font-size: ${fontSize}px;
    font-weight: 500;
    border: none;
    background-color: transparent;
    padding: 10px;
    width: 100%;
    color: inherit;
    &:hover {
      background: ${darkmode ? theme.dark.hover : theme.light.hover};
      cursor: pointer;
    }
    &:active {
      border: none;
      outline: none;
      div {
        color: ${darkmode ? theme.dark.bg : theme.light.bg};
        background-color: ${darkmode ? theme.dark.text : 'none'};
      }
      svg {
        color: ${darkmode ? theme.dark.bg : theme.light.bg};
      }
    }
    svg {
      font-size: 18px;
      margin-right: 5px;
      ${media.small} {
        margin-right: 0;
        color: ${darkmode ? theme.dark.bg : theme.light.bg};
        font-size: 18px;
      }
    }
  }
`;

// ul Style
export const MenuListCommonStyle = (darkmode: boolean = false) => css`
  padding: 0;
  background: ${darkmode ? theme.dark.box : theme.light.box};
  border-radius: 4px;
  ${media.small} {
    display: flex;
    margin: 0;
    flex: 3;
    background: ${darkmode ? theme.dark.box : '#fff'};
  }
`;

export const SettingMenuListStyle = (
  darkmode: boolean = false,
  ratio: number,
) => css`
  display: flex;
  flex-direction: column;
  flex: ${ratio};
  font-size: 16px;
  background: ${darkmode ? theme.dark.box : theme.light.box};
  color: ${darkmode ? theme.dark.text : theme.light.text};
  padding: 0;
  margin: 20px 0 0 0;
  min-width: 50px;
  li {
    list-style: none;
    margin: 5px 0;
    line-height: 1.5;
    width: 100%;
  }
  ${media.medium} {
    font-size: 12px;
  }
`;

// span Style
export const TagStyle = (darkmode: boolean) => css`
  background: ${darkmode ? theme.dark.bg : theme.light.bg};
  color: ${darkmode ? theme.dark.text : theme.light.text};
  border-radius: 8px;
  padding: 2px 4px;
  font-weight: 400;
  font-size: 16px;
  margin: 0 4px 4px 0;
  cursor: pointer;
  ${media.medium} {
    font-size: 12px;
    margin: 0 2px 2px 0;
  }
`;

// Datetime Style
export const DatetimeStyle = () => css`
  font-size: 13px;
  color: #adb5bd;
  margin: 0;
  padding: 0 0 0 0;
  display: flex;
  flex: 1;
  line-height: 1.5;
  align-content: center;
  justify-content: flex-end;
  text-align: right;
`;

export const LeftMenuAlignText = () => css`
  display: flex;
  align-items: center;
  padding-top: 3px;
  ${media.medium} {
    font-size: 16px;
  }
  ${media.small} {
    display: none;
  }
`;

export const PostLink = () => css`
  cursor: pointer;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 4px;
  border: none;
  background: transparent;
`;

export const CommentBox = (darkmode: boolean) => css`
  width: 500px;
  margin: 10px auto 20px auto;
  border-radius: 10px;
  padding: 10px 20px;
  box-sizing: border-box;
  display: block;
  justify-content: center;
  background: ${darkmode ? theme.dark.box : theme.light.box};
  ${media.medium} {
    width: auto;
  }
`;

export const UserProfilePhotoStyle = () => css`
  width: 40px;
  height: 40px;
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  text-indent: -9999px;
  border-radius: 50%;
  padding: 0;
  margin: 0;
  background-color: #ccc;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PostCommentUsername = (fontSize: number = 16) => css`
  display: flex;
  align-items: center;
  font-size: ${fontSize}px;
  justify-content: center;
  margin: 0;
  padding: 0;
  margin-left: 6px;
  font-weight: 400;
`;

export const PostTitleStyle = () => css`
  text-align: center;
  margin: 6px 0;
  padding: 0;
  flex: 3;
  font-size: 24px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplayViewStyle = () => css`
  min-width: ${media.size.large};
  margin: 0 auto;
  color: #333;
  padding: 0;
  font-weight: 500;
  overflow-y: initial;
  display: flex;
  margin-top: 50px;
  position: relative;
  justify-content: center;
  ${media.medium} {
    max-width: ${media.size.medium};
    min-width: ${media.size.small};
    display: flex;
    flex-direction: row;
  }
  ${media.small} {
    max-width: ${media.size.small};
    min-width: auto;
    margin-top: 0;
  }
`;

export const ContentBox = () => css`
  max-width: 500px;
  /* height: 550px; */
  border-radius: 15px;
  margin: 0 auto 20px auto;
  padding: 10px 20px;
  box-sizing: border-box;
  ${media.medium} {
    min-width: 230px;
    /* display: flex; */
    flex: 1;
    margin: 0 0 20px 0;
    height: auto;
  }
`;
export const ReverseResponsiveView = () => css`
  display: block;
  ${media.medium} {
    display: none;
  }
`;

export const ResponsiveView = () => css`
  @media (min-width: 769px) {
    display: none;
  }
  ${media.medium} {
    display: block;
  }
  ${media.small} {
    display: none;
  }
`;

export const RouterLinkStyle = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const RouterLinkButton = styled(Link)<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const IgnoreFilter = (filter: number) => css`
  display: ${filter > 0 ? 'none' : 'block'};
`;

export const MsgContainer = (darkmode: boolean, toggle: boolean) => css`
  width: 540px;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  padding: 20px;
  box-sizing: border-box;
  flex-direction: column;
  background: ${darkmode ? theme.dark.message : theme.light.message};
  display: ${toggle ? 'none' : 'flex'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.medium} {
    width: auto;
    min-width: 150px;
  }
  ${media.small} {
    max-width: 250px;
    border: 1px solid ${theme.light.login};
  }
`;

export const MsgListItemCommon = () => css`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  li {
    list-style: none;
    width: fit-content;
    height: fit-content;
    margin: 5px 0;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    font-size: 12px;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  li:first-child {
    margin: 0 0 5px 0;
    justify-content: center;
    cursor: initial;
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 4px;
  }
`;

export const MsgListPageNum = () => css``;

export const ContentSubMenuWindowCommon = (
  toggle: boolean,
  darkmode: boolean,
) => css`
  ${MenuListCommonStyle(darkmode)};
  background-color: ${darkmode ? theme.dark.box : theme.light.userProfileBox};
  width: 120px;
  position: absolute;
  margin-top: 50px;
  margin-left: 10px;
  display: ${toggle ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  li {
    ${MenuListStyle(darkmode, 12)};
    width: 100%;
    button {
      padding: 5px 0;
      &:hover {
        background: ${darkmode ? theme.dark.userProfileBox : theme.light.bg};
      }
      &:focus {
        color: ${darkmode ? theme.dark.text : theme.light.text};
        background: ${darkmode ? theme.dark.bg : theme.light.bg};
      }
    }
  }
  ${media.small} {
    margin-top: 50px;
    margin-left: 5px;
    width: 90px;
    display: ${toggle ? 'flex' : 'none'};
    flex-direction: column;
    background-color: ${darkmode ? theme.dark.box : theme.light.userProfileBox};
  }
`;

export const setLogo = () => css`
  width: 100%;
  display: block;
`;

export const AlignText = styled.div`
  ${LeftMenuAlignText};
`;
