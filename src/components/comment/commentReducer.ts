// action type, function
import { ActionType } from 'typesafe-actions';
import { UserData, comments } from '../../data/userdata';
import { writeDateType } from '../../util/dateManage';

const COMMENT_ADD = 'comment/COMMENTADD' as const;
const COMMENT_REMOVE = 'comment/COMMENTREMOVE' as const;

const writer = UserData.username;

export const commentAdd = (
  idIndex: number,
  idValue: number,
  content: string,
  getDate: writeDateType,
) => ({
  type: COMMENT_ADD,
  payload: {
    postId: idIndex,
    id: idValue,
    username: writer,
    content,
    profile: '',
    writeDate: getDate,
  },
});

export const commentRemove = (id: number) => ({
  type: COMMENT_REMOVE,
  payload: {
    id,
  },
});

export type Comment = {
  postId: number;
  id: number;
  username: string;
  content: string;
  profile: string;
  writeDate: writeDateType;
};
export type CommentList = Comment[];

export type isCommentType = CommentList;

const initialState: CommentList = comments;

const actions = {
  commentAdd,
  commentRemove,
};

type Actions = ActionType<typeof actions>;

function CommentReducers(
  state: CommentList = initialState,
  action: Actions,
): CommentList {
  switch (action.type) {
    case COMMENT_ADD:
      return state.concat(action.payload);
    case COMMENT_REMOVE:
      return state.filter((list) => list.id !== action.payload.id);
    default:
      return state;
  }
}

export default CommentReducers;
