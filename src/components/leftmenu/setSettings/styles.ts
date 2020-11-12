import styled from 'styled-components';
import {
  CommentSubmitButtonStyle,
  ContentBox,
  InputVirtualEvent,
  SettingMenuListStyle,
} from '../../../util/CommonStyle';
import media from '../../../util/mediaQuery';
import theme from '../../../util/theme';

export const SettingContainer = styled.div<{
  darkmode: boolean;
  settingsClose: boolean;
}>`
  background: ${(props) => (props.darkmode ? theme.dark.box : theme.light.box)};
  color: ${(props) => (props.darkmode ? theme.dark.text : theme.light.text)};
  display: ${(props) => (props.settingsClose ? 'none' : 'block')};
  ${ContentBox};
  margin: 0 50px;
  min-width: 500px;
  max-width: initial;
  ${media.medium} {
    display: ${(props) => (props.settingsClose ? 'none' : 'flex')};
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
  }
  ${media.small} {
    margin: 80px 40px 0;
  }
`;

export const SettingdefaultTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const SettingMenuWrapper = styled.div`
  display: flex;
`;

export const SettingMenuList = styled.ul<{ darkmode: boolean }>`
  ${(props) => SettingMenuListStyle(props.darkmode, 1)};
  justify-content: flex-start;
`;

export const SettingMenuButtonList = styled.ul<{ darkmode: boolean }>`
  ${(props) => SettingMenuListStyle(props.darkmode, 4.5)};
`;

export const SettingsCloseWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-right: 12px;
  box-sizing: border-box;
`;

export const LogOutButtonContainer = styled.button<{ darkmode: boolean }>`
  ${(props) => InputVirtualEvent(props.darkmode)}
  background: ${(props) => (props.darkmode ? theme.dark.bg : theme.light.bg)};
  color: ${(props) => (props.darkmode ? theme.dark.text : theme.light.text)};
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 3px;
  font-size: 14px;
  line-height: 1.5;
  cursor: pointer;
  svg {
    font-size: inherit;
  }
`;

export const SettingsCloseBtn = styled.button<{ darkmode: boolean }>`
  ${(props) => InputVirtualEvent(props.darkmode)}
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
  padding: 0;
  float: right;
`;
