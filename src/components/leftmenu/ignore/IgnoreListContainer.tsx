import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducer/index';
import {
  blockIgnoreRequest,
  removeIgnoreRequest,
  unblockIgnoreRequest,
} from '../../../reducer/user';
import { IgnoreListWrapper, IgnoreRemoveContainer, NameSpace } from './styles';
// import { ignoreRemove } from './ignore';

type UserProps = {
  name: string;
  id: number;
  darkmode: boolean;
};

const User = React.memo(function User({ name, id, darkmode }: UserProps) {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const onRemove = useCallback(() => {
    if (userState) {
      dispatch(
        removeIgnoreRequest({
          myId: parseInt(userState.id, 10),
          id,
        }),
      );
    }
  }, [dispatch, userState, id]);
  return (
    <li>
      <NameSpace>{name}</NameSpace>
      <IgnoreRemoveContainer darkmode={darkmode} onClick={onRemove}>
        해제
      </IgnoreRemoveContainer>
    </li>
  );
});

function IgnoreListContainer() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const friend = useSelector((state: RootState) => state.friend.friend);
  // const ignoreList = useSelector((state: RootState) => state.ignore);
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const dispatch = useDispatch();

  const block = userState?.blockIgnore;

  const onBlock = useCallback(() => {
    if (block) {
      dispatch(unblockIgnoreRequest());
    } else {
      dispatch(blockIgnoreRequest());
    }
  }, [dispatch, block]);

  return (
    <IgnoreListWrapper darkmode={darkmode} friend={friend}>
      <li>
        차단 목록{' '}
        {userState && userState.Ignorings ? userState.Ignorings.length : '0'}명
      </li>
      <li>
        <span>게시글 숨김</span>
        <input type="checkbox" checked={block} onChange={onBlock} />
      </li>
      {userState &&
        userState.Ignorings.map((user: any) => (
          <User
            key={user.id}
            name={user.username}
            id={user.id}
            darkmode={darkmode}
          />
        ))}
    </IgnoreListWrapper>
  );
}

export default React.memo(IgnoreListContainer);
