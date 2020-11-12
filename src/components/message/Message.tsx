import React, { useCallback, useEffect, useState } from 'react';
import { RootState } from '../../reducer/index';
import { useSelector, useDispatch } from 'react-redux';
import {
  EditorSettings,
  ListContainer,
  MessageButtonContainer,
  MessageCloseButton,
  MessageGoBack,
  MessageSendBtn,
} from './styles';
import { MessageClose, MessageOpen } from './messageReducer';
import { sendClose } from './MailToggle';
import { writeDateType, setDate } from '../../util/dateManage';
import { msgSend } from './MailBox';
import { UserData } from '../../data/userdata';
import ReactQuill from 'react-quill';
import './quill.snow.css';

type MessageProps = {
  sendActive: boolean;
};

function Message({ sendActive }: MessageProps) {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const [recipient, setRecipient] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const dispatch = useDispatch();
  const onToggle = useCallback(() => {
    if (window.confirm('정말로 취소할까요?')) {
      dispatch(MessageClose());
      dispatch(sendClose());
    }
  }, [dispatch]);

  const msgBack = useCallback(() => {
    if (window.confirm('정말로 목록으로 이동할까요?')) {
      dispatch(MessageOpen());
      dispatch(sendClose());
    }
  }, [dispatch]);

  const onRecipient = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRecipient(event.target.value);
    },
    [],
  );

  const onTitle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }, []);

  const onBody = useCallback((body: string) => {
    setBody(body);
  }, []);

  const readyLetter = useCallback(
    (
      recipient: string,
      title: string,
      content: string,
      date: writeDateType,
    ) => {
      dispatch(msgSend(recipient, title, content, date));
    },
    [dispatch],
  );

  const onSendMessage = useCallback(() => {
    // event.preventDefault();
    const space = /^\s+|\s+$/g;
    const today = new Date();

    // Today Date
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const day = today.getDay();

    // Today Time
    const hour = today.getHours();
    const min = today.getMinutes();
    const sec = today.getSeconds();

    if (recipient.length === 0) {
      alert('받는 사람을 입력하세요.');
      return;
    }

    if (recipient.replace(space, '') === '') {
      alert('받는 사람을 다시 입력해주세요.');
      return;
    }

    if (recipient === UserData.username || recipient === 'anonymous') {
      alert('받는 사람을 다시 확인해주세요!');
      return;
    }

    if (title.length === 0) {
      alert('제목을 입력하세요.');
      return;
    }

    if (title.replace(space, '') === '') {
      alert('제목을 다시 입력해주세요.');
      return;
    }

    if (body.length === 0) {
      alert('내용을 입력하세요.');
      return;
    }

    if (body.replace(space, '') === '') {
      alert('내용을 다시 입력해주세요');
      return;
    }

    window.confirm('이대로 전송할까요?');
    readyLetter(
      recipient,
      title,
      body,
      setDate(year, month, date, day, hour, min, sec),
    );
    alert('쪽지를 성공적으로 보냈습니다.');
    dispatch(sendClose());
    dispatch(MessageOpen());
  }, [body, dispatch, readyLetter, recipient, title]);

  useEffect(() => {
    onBody(body);
  }, [onBody, body]);

  const Quill = ReactQuill;

  return (
    <>
      <ListContainer toggle={sendActive} darkmode={darkmode}>
        <h3>쪽지 Message</h3>
        <input
          type="text"
          placeholder="받는 사람"
          autoFocus
          value={recipient}
          onChange={onRecipient}
        />
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={onTitle}
        />
        <div className="text-editor">
          <Quill
            theme="snow"
            modules={EditorSettings.modules}
            formats={EditorSettings.formats}
            placeholder="내용"
            value={body}
            onChange={onBody}
          />
        </div>
        <MessageButtonContainer>
          <MessageGoBack darkmode={darkmode} onClick={msgBack}>
            뒤로
          </MessageGoBack>
          <MessageSendBtn onClick={onSendMessage} darkmode={darkmode}>
            전송
          </MessageSendBtn>
          <MessageCloseButton onClick={onToggle} darkmode={darkmode}>
            닫기
          </MessageCloseButton>
        </MessageButtonContainer>
      </ListContainer>
    </>
  );
}

export default React.memo(Message);
