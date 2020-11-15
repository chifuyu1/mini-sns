import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// action

// action function
export const darkmodeTrue = createStandardAction('DARKMODE/TRUE')();
export const darkmodeFalse = createStandardAction('DARKMODE/FALSE')();
export const darkmodeToggle = createStandardAction('DARKMODE/Toggle')();

type ModeState = {
  mode: boolean;
};

const initialState: ModeState = {
  mode:
    localStorage.getItem('darkmode') === 'false' ? false : localStorage.getItem('darkmode') === 'true' ? true : false,
};

const actions = { darkmodeTrue, darkmodeFalse, darkmodeToggle };

type ModeAction = ActionType<typeof actions>;

const darkmode = createReducer<ModeState, ModeAction>(initialState)
  .handleAction(darkmodeTrue, (state) => ({ mode: true }))
  .handleAction(darkmodeFalse, (state) => ({ mode: false }))
  .handleAction(darkmodeToggle, (state) => ({ mode: !state.mode }));

export default darkmode;
