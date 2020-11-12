import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// action

// action function
export const Toggle = createStandardAction('DARKMODE/TOGGLE')();

type ModeState = {
  mode: boolean;
};

const initialState: ModeState = {
  mode: false
};

const actions = { Toggle };

type ModeAction = ActionType<typeof actions>;

const darkmode = createReducer<ModeState, ModeAction>(
  initialState
).handleAction(Toggle, state => ({ mode: !state.mode }));

export default darkmode;
