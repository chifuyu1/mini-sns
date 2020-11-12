import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { CommentSubmitButtonStyle } from '../../util/CommonStyle';
import { RootState } from '../../reducer/index';
import { useHistory } from 'react-router-dom';
import { loginClose } from './loginWindowReducer';

const RouterLinkButton = styled.button<{ darkmode: boolean }>`
  ${(props) => CommentSubmitButtonStyle(props.darkmode)};
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function LoginCloseButton() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const dispatch = useDispatch();
  const history = useHistory();
  const onToggle = () => {
    dispatch(loginClose());
    history.goBack();
  };

  return (
    <RouterLinkButton onClick={onToggle} darkmode={darkmode}>
      닫기
    </RouterLinkButton>
  );
}

export default React.memo(LoginCloseButton);
