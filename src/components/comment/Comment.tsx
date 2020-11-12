import React from 'react';
import styled, { css } from 'styled-components';
import CommentFormUserInfo from './CommentFormUserInfo';
import { InputVirtualEvent, CommentBox } from '../../util/CommonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../reducer/index';
import theme from '../../util/theme';
import CommentForm from './CommentForm';

const CommentContainer = styled.div<{ darkmode: boolean }>`
  ${(props) => CommentBox(props.darkmode)};
`;
export const CommentWriteButtonStyle = (darkmode: boolean) => css`
  ${darkmode ? InputVirtualEvent(true) : InputVirtualEvent(false)};
  min-width: 300px;
  margin: 0;
  border: 0.5px solid ${darkmode ? theme.dark.bg : theme.light.bg};
`;

type CommentProps = {
  id: number;
};

function Comment({ id }: CommentProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const userState = useSelector((state: RootState) => state.user.userInfo);

  return (
    <CommentContainer darkmode={darkmode}>
      <CommentFormUserInfo
        id={id}
        username={userState ? userState.username : '로그인 후 작성하세요'}
      />
      <CommentForm id={id} />
    </CommentContainer>
  );
}

export default React.memo(Comment);
