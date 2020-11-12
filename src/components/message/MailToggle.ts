import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const sendOpen = createStandardAction('MAILTOGGLE/SENDOPEN')();
export const sendClose = createStandardAction('MAILTOGGLE/SENDCLOSE')();

type ToggleState = {
  sending: boolean;
};

const initialState: ToggleState = {
  sending: false,
};

const actions = { sendOpen, sendClose };

type Actions = ActionType<typeof actions>;

const MailToggle = createReducer<ToggleState, Actions>(initialState)
  .handleAction(sendOpen, (state) => ({ ...state, sending: true }))
  .handleAction(sendClose, (state) => ({ ...state, sending: false }));

export default MailToggle;
