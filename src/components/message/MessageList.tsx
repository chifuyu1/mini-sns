import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../reducer/index';
import { ConvertYear } from '../../util/dateManage';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import { sendOpen } from './MailToggle';
import { MessageClose } from './messageReducer';
import Message from './Message';
import { UserData } from '../../data/userdata';
import {
  ListPositioner,
  MessageButtonContainer,
  MessageSendBtn,
  MsgItemBox,
  MessageListContainer,
  MessageCloseButton,
} from './styles';

function MessageList() {
  const darkmode = useSelector((state: RootState) => state.darkmode.mode);
  const toggle = useSelector((state: RootState) => state.messageToggle.close);
  const msgList = useSelector((state: RootState) => state.MailBox);
  const sendActive = useSelector(
    (state: RootState) => state.MailToggle.sending,
  );
  const dispatch = useDispatch();

  const onSending = useCallback(() => {
    dispatch(MessageClose());
    dispatch(sendOpen());
  }, [dispatch]);

  const onClose = useCallback(() => dispatch(MessageClose()), [dispatch]);

  const msgFilter = msgList.filter(
    (list) => list.recipient === UserData.username,
  );

  const msgLength = msgFilter.length;

  return (
    <>
      <ListPositioner>
        <MessageListContainer darkmode={darkmode} toggle={toggle}>
          <h3>쪽지 Message</h3>
          <MsgItemBox darkmode={darkmode}>
            <table>
              <thead>
                <tr className="firstRow">
                  <th className="senderName">보낸 사람</th>
                  <th className="day">보낸 날짜</th>
                  <th className="title">제목</th>
                </tr>
              </thead>
              <tbody>
                {msgLength !== 0 ? (
                  msgFilter.map((list) => (
                    <tr key={list.msgId}>
                      <td className="senderName">{list.sender}</td>
                      <td className="day">
                        {ConvertYear(list.msgDate.year)}.{list.msgDate.month}.
                        {list.msgDate.date}&nbsp;
                        {list.msgDate.hour}:{list.msgDate.min}
                      </td>
                      <td className="title">{list.title}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="noMsgLeft"></td>
                    <td className="noMsg">쪽지가 없습니다.</td>
                    <td className="noMsgRight"></td>
                  </tr>
                )}
              </tbody>
            </table>
          </MsgItemBox>
          <div className="pageNum">
            <div className="pageNumCenter">
              <ul>
                <li>
                  <button>
                    <BsFillCaretLeftFill />
                  </button>
                </li>
                <li>
                  <button>1</button>
                </li>
                <li>
                  <button>2</button>
                </li>
                <li>
                  <button>3</button>
                </li>
                <li>
                  <button>
                    <BsFillCaretRightFill />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <MessageButtonContainer>
            <MessageSendBtn darkmode={darkmode} onClick={onSending}>
              쪽지 보내기
            </MessageSendBtn>
            <MessageCloseButton darkmode={darkmode} onClick={onClose} />
          </MessageButtonContainer>
        </MessageListContainer>
        <Message sendActive={sendActive} />
      </ListPositioner>
    </>
  );
}

export default React.memo(MessageList);
