// action type, function
import { UserData } from '../../../data/userdata';
import { ActionType } from 'typesafe-actions';

const IGNORE_ADD = 'IGNORE/IGNOREADD' as const;
const IGNORE_REMOVE = 'IGNORE/IGNOREREMOVE' as const;

export const ignoreAdd = (username: string) => ({
  type: IGNORE_ADD,
  payload: {
    username,
  },
});

export const ignoreRemove = (id: number) => ({
  type: IGNORE_REMOVE,
  payload: {
    id,
  },
});

const items = UserData.ignore;

export type Friend = {
  id: number;
  username: string;
};
type IgnoreState = Friend[];

const initialState: IgnoreState = items;

const actions = { ignoreAdd, ignoreRemove };

type Actions = ActionType<typeof actions>;

function ignore(
  state: IgnoreState = initialState,
  action: Actions
): IgnoreState {
  switch (action.type) {
    case IGNORE_ADD:
      let prevId = Math.max(...state.map((friendlist) => friendlist.id)) + 1;
      let nextId = prevId < 1 ? 1 : prevId;
      return state.concat({
        id: nextId++,
        username: action.payload.username,
      });
    case IGNORE_REMOVE:
      return state.filter((list) => list.id !== action.payload.id);
    default:
      return state;
  }
}

export default ignore;
