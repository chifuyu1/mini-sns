/* eslint-disable @typescript-eslint/no-unused-vars */
import { writing } from '../../data/userdata';
import { ActionType } from 'typesafe-actions';
import { writeDateType } from '../../util/dateManage';

// action
const POST_ADD = 'POSTADD/POSTADD' as const;
const POST_FILTER = 'POSTADD/POSTFILTER' as const;
const POST_RESTORE = 'POSTADD/POSTRESTORE' as const;
const POST_LIKE = 'POSTADD/POSTLIKE' as const;
const POST_UNLIKE = 'POSTADD/POSTUNLIKE' as const;

const user = writing;
const idArray = user.map((list) => list.id);
let nextId = idArray.length;

export const postAdd = (
  title: string,
  content: string,
  getDate: writeDateType,
) => ({
  type: POST_ADD,
  payload: {
    id: ++nextId,
    title,
    content,
    username: 'chifuyu',
    profile: '',
    likeCount: 0,
    writeDate: getDate,
  },
});

export const postFilter = (username: Post[]) => ({
  type: POST_FILTER,
  payload: {
    username,
  },
});

export const postRestore = () => ({
  type: POST_RESTORE,
});

export type Post = {
  id: number;
  username: string;
  title: string;
  content: string;
  profile: string;
  likeCount: number;
  writeDate: writeDateType;
};

export const postLike = (id: number) => {
  return {
    type: POST_LIKE,
    payload: {
      id,
    },
  };
};

export const postUnlike = (id: number) => {
  return {
    type: POST_UNLIKE,
    payload: {
      id,
    },
  };
};

export type PostList = Post[];

export const initialState: PostList = writing;

const actions = {
  postAdd,
  postFilter,
  postRestore,
  postLike,
  postUnlike,
};

type Actions = ActionType<typeof actions>;

function PostAdd(state: PostList = initialState, action: Actions): PostList {
  switch (action.type) {
    case POST_ADD:
      return state.concat(action.payload);
    case POST_FILTER:
      return action.payload.username;
    case POST_RESTORE:
      return initialState;
    case POST_LIKE:
      const likeState = state.filter((info) => info.id !== action.payload.id);
      let findPostLike = state.find((info) => info.id === action.payload.id);
      if (findPostLike) {
        const a = {
          ...findPostLike,
          likeCount: findPostLike?.likeCount + 1,
        };
        return likeState.concat(a);
      } else {
        return state;
      }
    case POST_UNLIKE:
      const unlikeState = state.filter((info) => info.id !== action.payload.id);
      let findPostUnlike = state.find((info) => info.id === action.payload.id);
      if (findPostUnlike) {
        const b = {
          ...findPostUnlike,
          likeCount: findPostUnlike?.likeCount - 1,
        };
        return unlikeState.concat(b);
      } else {
        return state;
      }

    default:
      return state;
  }
}

export default PostAdd;

// const addAction = { postLike }

// type addActions = ActionType<typeof addAction>

// type addLike = {
//   likeCount: number;
// }

// const likeState: addLike = {
//   likeCount: 0
// }

// export function addLikeReducer(state: addLike = likeState, action: addActions) {
//   switch (action.type) {
//     case POST_LIKE:
//       state.map(list => list.)
//       return;
//   }
// }
