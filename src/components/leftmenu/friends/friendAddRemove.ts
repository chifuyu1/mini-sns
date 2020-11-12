// action type, function
import { UserData } from '../../../data/userdata';
import { ActionType } from 'typesafe-actions';

const FRIEND_ADD = 'friendAddRemove/FRIENDADD' as const;
const FRIEND_REMOVE = 'friendAddRemove/FRIENDREMOVE' as const;

export const friendAdd = (userId: number, username: string) => ({
  type: FRIEND_ADD,
  payload: {
    userId,
    username,
  },
});

export const friendRemove = (id: number) => ({
  type: FRIEND_REMOVE,
  payload: {
    id,
  },
});

const items = UserData.friendItems.users;

export type Friend = {
  id: number;
  username: string;
};
type FriendState = Friend[];

const initialState: FriendState = items;

const actions = { friendAdd, friendRemove };

type Actions = ActionType<typeof actions>;

function friendAddRemove(
  state: FriendState = initialState,
  action: Actions,
): FriendState {
  switch (action.type) {
    case FRIEND_ADD:
      return state.concat({
        id: action.payload.userId,
        username: action.payload.username,
      });
    case FRIEND_REMOVE:
      return state.filter((list) => list.id !== action.payload.id);
    default:
      return state;
  }
}

export default friendAddRemove;
