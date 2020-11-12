import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducer';
import { AlignText } from '../../util/CommonStyle';
import { MdHttps } from 'react-icons/md';
import { FiLogOut } from 'react-icons/fi';
import { logoutRequest } from '../../reducer/user';
import { LeftMenuLogin } from './styles';
import { useHistory } from 'react-router-dom';
import { loginOpen } from './loginWindowReducer';

function LoginButton() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isOpen = useSelector((state: RootState) => state.loginWindow.open);
  const userState = useSelector((state: RootState) => state.user);

  const { userInfo } = userState;
  const onToggle = useCallback(() => {
    if (userInfo && !isOpen) {
      dispatch(logoutRequest());
      return;
    }
    if (!userInfo && !isOpen) {
      dispatch(loginOpen());
      history.push('/login');
      return;
    }
  }, [dispatch, userInfo, isOpen, history]);

  return (
    <LeftMenuLogin onClick={onToggle}>
      {userInfo ? <FiLogOut /> : <MdHttps />}
      <AlignText>{userInfo ? '로그아웃' : '로그인'}</AlignText>
    </LeftMenuLogin>
  );
}

export default React.memo(LoginButton);
