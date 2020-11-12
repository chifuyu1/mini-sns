import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../reducer/index';
import { friends } from './friend';
import FriendListWrapper from './FriendWrapper';

function FriendListContainer() {
  const friend = useSelector((state: RootState) => state.friend.friend);
  const dispatch = useDispatch();

  const onFriend = () => dispatch(friends());
  return <FriendListWrapper onClick={onFriend} friend={friend} />;
}

export default React.memo(FriendListContainer);
