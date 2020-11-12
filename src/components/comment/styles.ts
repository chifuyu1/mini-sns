import styled from 'styled-components';
import {
  CommentSubmitButtonStyle,
  InputVirtualEvent,
} from '../../util/CommonStyle';

export const CommentWrite = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
`;

export const CommentWriteInput = styled.input<{ darkmode: boolean }>`
  width: 100%;
  ${(props) => InputVirtualEvent(props.darkmode)}
  &::placeholder {
    font-size: 12px;
  }
`;

export const CommentFormStyle = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
`;
