import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { MessageOpen } from '../../message/messageReducer';
import { sendClose } from '../../message/MailToggle';
import { AlignText } from '../../../util/CommonStyle';
import { MdMail } from 'react-icons/md';

function LeftMessageContainer() {
  const dispatch = useDispatch();

  const onToggle = useCallback(() => {
    dispatch(MessageOpen());
    dispatch(sendClose());
  }, [dispatch]);

  return (
    <button onClick={onToggle}>
      <MdMail />
      <AlignText>쪽지</AlignText>
    </button>
  );
}

export default React.memo(LeftMessageContainer);
