import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../reducer';
import { addIgnoreRequest, removeIgnoreRequest } from '../../../reducer/user';
// import { ignoreAdd } from './ignore';

type IgnoreInsertProps = {
  username: string;
  id: number;
};

function IgnoreInsert({ username, id }: IgnoreInsertProps) {
  const dispatch = useDispatch();
  // const onIgnore = useCallback(
  //   (username: string) => dispatch(ignoreAdd(username)),
  //   [dispatch]
  // );
  const userState = useSelector((state: RootState) => state.user.userInfo);
  const postState = useSelector((state: RootState) => state.post.userPost);
  const targetId = postState.find((info) => info.id === id)?.UserId;
  const onIgnore = useCallback(() => {
    if (
      userState &&
      !userState?.Ignorings.map((info: any) => info.id).includes(targetId)
    ) {
      dispatch(addIgnoreRequest({ myId: userState.id, id: targetId }));
    }
    if (
      userState &&
      userState?.Ignorings.map((info: any) => info.id).includes(targetId)
    ) {
      dispatch(
        removeIgnoreRequest({
          myId: parseInt(userState.id, 10),
          id: targetId,
        }),
      );
    }
  }, [dispatch, userState, targetId]);

  return (
    <>
      <button onClick={onIgnore} type="button">
        {userState?.Ignorings.map((info: any) => info.id).includes(targetId)
          ? '차단 해제'
          : '차단 추가'}
      </button>
    </>
  );
}

export default React.memo(IgnoreInsert);
