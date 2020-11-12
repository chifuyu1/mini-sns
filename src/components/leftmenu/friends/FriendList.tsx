import React from 'react';
import styled from 'styled-components';
import { MenuListCommonStyle } from '../../../util/CommonStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../../reducer/index';
import FriendRemove from './FriendRemove';
import media from '../../../util/mediaQuery';
import theme from '../../../util/theme';

const FriendLists = styled.ul<{ darkmode: boolean; friend: boolean }>`
  ${(props) =>
    props.darkmode ? MenuListCommonStyle(true) : MenuListCommonStyle(false)};
  /* position: absolute; */
  top: 0;
  left: 0;
  display: ${(props) => (props.friend ? 'flex' : 'none')};
  min-width: 100%;
  font-size: 12px;
  text-align: center;
  flex-direction: column;
  li {
    margin: 4px 0;
    justify-content: center;
    display: flex;
  }
  /* ${media.small} {
    display: ${(props) => (props.friend ? 'flex' : 'none')};
    position: absolute;
    top: 50px;
    width: 90px;
    border: 1px solid ${theme.light.login};
    li {
      width: 100% !important;
      margin: 5px 0;
    }
  } */
`;

const NameSpace = styled.div`
  margin-right: 10px;
  font-size: 14px;
`;

type UserProps = {
  name: string;
  id: number;
};

const User = React.memo(function User({ name, id }: UserProps) {
  return (
    <>
      <li>
        <NameSpace>{name}</NameSpace>
        <FriendRemove id={id} />
      </li>
    </>
  );
});

function FriendList() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const friend = useSelector((state: RootState) => state.friend.friend);
  // const addList = useSelector((state: RootState) => state.friendAddRemove);
  const userState = useSelector((state: RootState) => state.user.userInfo);

  return (
    <FriendLists darkmode={darkmode} friend={friend}>
      <li>
        친구 목록{' '}
        {userState && userState.Friends ? userState.Friends.length : '0'}명
      </li>
      {userState && userState.Friends ? (
        userState.Friends.map((user: any) => {
          return <User name={user.username} key={user.id} id={user.id} />;
        })
      ) : (
        <></>
      )}
    </FriendLists>
  );
}

export default React.memo(FriendList);
