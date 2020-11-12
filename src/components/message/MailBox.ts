import { UserData } from '../../data/userdata';
import { writeDateType } from '../../util/dateManage';
import { ActionType } from 'typesafe-actions';

// action
const MSG_SEND = 'writeDate/SEND' as const;
const username = UserData.username;
const msg = UserData.messageBox;
let key = msg.map((list) => list.msgId);
let nextId: number;
if (!key.length) {
  nextId = 1;
}
nextId = key.length;

// action fn
export const msgSend = (
  recipient: string,
  title: string,
  content: string,
  date: writeDateType
) => ({
  type: MSG_SEND,
  payload: {
    msgId: ++nextId,
    sender: username,
    recipient,
    title,
    content,
    msgDate: date,
  },
});

type msgType = {
  msgId: number;
  sender: string;
  recipient: string;
  title: string;
  content: string;
  msgDate: writeDateType;
};

const initialState: msgType[] = msg;

const actions = { msgSend };
type Actions = ActionType<typeof actions>;

export default function MailBox(
  state: msgType[] = initialState,
  action: Actions
) {
  switch (action.type) {
    case MSG_SEND:
      return state.concat(action.payload);
    default:
      return state;
    // throw new Error('Failed to send a message');
  }
}
