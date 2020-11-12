import React from 'react';
import { useDispatch } from 'react-redux';
import { WriteOpen } from './writeReducer';
import { LeftMenuLogin } from '../loginwindow/styles';
import { MdEdit } from 'react-icons/md';
import { AlignText } from '../../util/CommonStyle';
import { useHistory } from 'react-router-dom';

function WriteButtonContainer() {
  const dispatch = useDispatch();
  const history = useHistory();
  const onToggle = () => {
    dispatch(WriteOpen());
    history.push('/write');
  };

  return (
    <LeftMenuLogin onClick={onToggle}>
      <MdEdit />
      <AlignText>글 쓰기</AlignText>
    </LeftMenuLogin>
  );
}

export default React.memo(WriteButtonContainer);
