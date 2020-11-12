import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const MessageOpen = createStandardAction('MESSAGE/MESSAGEOPEN')();
export const MessageClose = createStandardAction('MESSAGE/MESSAGECLOSE')();

type Toggle = {
  open: boolean;
  close: boolean;
};

const initialState: Toggle = {
  open: false,
  close: true,
};

const actions = { MessageOpen, MessageClose };

type Actions = ActionType<typeof actions>;

const messageToggle = createReducer<Toggle, Actions>(initialState)
  .handleAction(MessageClose, (state) => ({
    ...state,
    open: false,
    close: true,
  }))
  .handleAction(MessageOpen, (state) => ({
    ...state,
    open: true,
    close: false,
  }));

export default messageToggle;
