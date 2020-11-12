import React, { useCallback } from 'react';
import { RootState } from '../../../reducer/index';
import styled from 'styled-components';
import { TagStyle } from '../../../util/CommonStyle';
import { useSelector, useDispatch } from 'react-redux';
import { removeFriendRequest } from '../../../reducer/user';

const FriendRemoveContainer = styled.div<{ darkmode: boolean }>`
  ${(props) => TagStyle(props.darkmode)};
  margin: 0;
  display: block;
  border-radius: 0;
  padding: 2px 4px;
  font-size: 12px;
`;

type FriendRemoveProps = {
  id: number;
};

function FriendRemove({ id }: FriendRemoveProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const onRemove = useCallback(() => {
    if (userState) {
      dispatch(
        removeFriendRequest({
          id,
          myId: parseInt(userState.id, 10),
        }),
      );
    }
  }, [userState, dispatch, id]);

  return (
    <FriendRemoveContainer darkmode={darkmode} onClick={onRemove}>
      삭제
    </FriendRemoveContainer>
  );
}

export default React.memo(FriendRemove);
