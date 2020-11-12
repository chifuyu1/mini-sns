import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

export const WriteOpen = createStandardAction('WRITE/WRITEOPEN')();
export const WriteClose = createStandardAction('WRITE/WRITECLOSE')();

type Toggle = {
  open: boolean;
  close: boolean;
};

const initialState: Toggle = {
  open: false,
  close: true
};

const actions = { WriteOpen, WriteClose };

type Actions = ActionType<typeof actions>;

const writeToggle = createReducer<Toggle, Actions>(initialState)
  .handleAction(WriteOpen, state => ({ ...state, open: true, close: false }))
  .handleAction(WriteClose, state => ({ ...state, open: false, close: true }));

export default writeToggle;
