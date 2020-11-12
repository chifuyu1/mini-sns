import styled from 'styled-components';
import media from '../../util/mediaQuery';
import theme from '../../util/theme';
import {
  CommentSubmitButtonStyle,
  ContentBox,
  InputCommonStyle,
  InputVirtualEvent,
} from '../../util/CommonStyle';

export const WriteContainer = styled.div<{
  darkmode: boolean;
  writeClose: boolean;
}>`
  background: ${(props) => (props.darkmode ? theme.dark.box : theme.light.box)};
  color: ${(props) => (props.darkmode ? theme.dark.text : theme.light.text)};
  ${ContentBox};
  max-width: 550px;
  display: flex;
  flex-direction: column;
  margin: 0;
  height: 90%;
  min-width: 500px;
  ${media.medium} {
    height: 100%;
    border-radius: 0;
    margin: 0;
    max-width: initial;
    min-width: initial;
  }
  ${media.small} {
    height: 100%;
    margin: 0;
    border-radius: 0;
    min-width: initial;
  }
  .write-form {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
  .write-title {
    ${(props) => InputCommonStyle(props.darkmode)};
    ${(props) => InputVirtualEvent(props.darkmode)};
    margin-bottom: 10px;
    width: 100%;
  }
  .write-content {
    flex: 1;
    display: flex;
  }
  .btn-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    padding: 10px 12px 5px 0;
  }
`;

export const WritedefaultTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const WritePostioner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const WriteBtn = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
`;
