import { deprecated, ActionType, createReducer } from 'typesafe-actions';
const { createStandardAction } = deprecated;

// action function
export const friends = createStandardAction('FREINDLIST/OPEN')();

type ModeState = {
  friend: boolean;
};

const initialState: ModeState = {
  friend: false
};

// action type
const actions = { friends };

type ModeAction = ActionType<typeof actions>;

const friend = createReducer<ModeState, ModeAction>(
  initialState
).handleAction(friends, state => ({ friend: !state.friend }));

export default friend;
