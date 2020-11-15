import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFriendRequest, removeFriendRequest } from '../../../reducer/user';
import { RootState } from '../../../reducer';

type FriendInsertProps = {
  username: string;
  id: number;
};

function FriendInsert({ username, id }: FriendInsertProps) {
  const dispatch = useDispatch();
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const postState = useSelector((state: RootState) => state.post.userPost);
  const targetId = postState.find((info) => info.id === id)?.UserId;

  const onInsert = useCallback(() => {
    if (userState && !userState?.Friending.map((info: any) => info.id).includes(targetId)) {
      dispatch(addFriendRequest({ myId: parseInt(userState.id, 10), id }));
    }
    if (userState && userState?.Friending.map((info: any) => info.id).includes(targetId)) {
      dispatch(removeFriendRequest({ id, myId: parseInt(userState.id, 10) }));
    }
  }, [dispatch, id, userState, targetId]);
  return (
    <button onClick={onInsert} type='button'>
      {userState?.Friending.map((info: any) => info.id).includes(targetId) ? '친구 삭제' : '친구 추가'}
    </button>
  );
}

export default React.memo(FriendInsert);
