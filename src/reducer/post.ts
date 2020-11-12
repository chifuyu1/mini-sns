import produce, { Draft } from 'immer';
import { ActionType } from 'typesafe-actions';

type PostState = {
  userPost: any[];
  images: [];
  addPostLoading: boolean;
  addPostDone: boolean | any;
  addPostError: null | any;
  getPostLoading: boolean;
  getPostDone: boolean | any;
  getPostError: null | any;
  isMoreLoadingPosts: boolean;
  updatePostLoading: boolean;
  updatePostDone: boolean | any;
  updatePostError: null | any;
  removePostLoading: boolean;
  removePostDone: boolean | any;
  removePostError: null | any;
  addCommentLoading: boolean;
  addCommentDone: boolean | any;
  addCommentError: null | any;
  getCommentLoading: boolean;
  getCommentDone: boolean | any;
  getCommentError: null | any;
  updateCommentClicked: boolean;
  updateCommentId: null | number;
  updateCommentLoading: boolean;
  updateCommentDone: boolean | any;
  updateCommentError: null | any;
  removeCommentLoading: boolean;
  removeCommentDone: boolean | any;
  removeCommentError: null | any;
  searchLoading: boolean;
  searchDone: boolean | any;
  searchError: null | any;
  resetting: boolean;
};

const postState: PostState = {
  userPost: [],
  images: [],
  updateCommentClicked: false,
  updateCommentId: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
  isMoreLoadingPosts: false,
  updatePostLoading: false,
  updatePostDone: false,
  updatePostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  getCommentLoading: false,
  getCommentDone: false,
  getCommentError: null,
  updateCommentLoading: false,
  updateCommentDone: false,
  updateCommentError: null,
  removeCommentLoading: false,
  removeCommentDone: false,
  removeCommentError: null,
  searchLoading: false,
  searchDone: false,
  searchError: null,
  resetting: false,
};

// action

export const GET_POST_REQUEST = 'GET_POST_REQUEST' as const;
export const GET_POST_SUCCESS = 'GET_POST_SUCCESS' as const;
export const GET_POST_ERROR = 'GET_POST_ERROR' as const;

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
export const ADD_POST_ERROR = 'ADD_POST_ERROR' as const;

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST' as const;
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS' as const;
export const UPDATE_POST_ERROR = 'UPDATE_POST_ERROR' as const;

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
export const REMOVE_POST_ERROR = 'REMOVE_POST_ERROR' as const;

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_ERROR = 'ADD_COMMENT_ERROR' as const;

export const GET_COMMENT_REQUEST = 'GET_COMMENT_REQUEST' as const;
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS' as const;
export const GET_COMMENT_ERROR = 'GET_COMMENT_ERROR' as const;

export const UPDATE_COMMENT_REQUEST = 'UPDATE_COMMENT_REQUEST' as const;
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS' as const;
export const UPDATE_COMMENT_ERROR = 'UPDATE_COMMENT_ERROR' as const;

export const REMOVE_COMMENT_REQUEST = 'REMOVE_COMMENT_REQUEST' as const;
export const REMOVE_COMMENT_SUCCESS = 'REMOVE_COMMENT_SUCCESS' as const;
export const REMOVE_COMMENT_ERROR = 'REMOVE_COMMENT_ERROR' as const;

export const SEARCH_REQUEST = 'SEARCH_REQUEST' as const;
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS' as const;
export const SEARCH_ERROR = 'SEARCH_ERROR' as const;

export const BLOCK_IGNORE_POST = 'BLOCK_IGNORE_POST' as const;
export const UNBLOCK_IGNORE_POST = 'UNBLOCK_IGNORE_POST' as const;

export const ADD_LIKE = 'ADD_LIKE' as const;
export const REMOVE_LIKE = 'REMOVE_LIKE' as const;

export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE' as const;
export const REMOVE_PROFILE_IMAGE = 'REMOVE_PROFILE_IMAGE' as const;

export const RESET_TRUE = 'RESET_TRUE' as const;
export const RESET_FALSE = 'RESET_FALSE' as const;

export const UPDATE_COMMENT_CLICKED = 'UPDATE_COMMENT_CLICKED' as const;

export const resetTrue = () => ({
  type: RESET_TRUE,
});

export const resetFalse = () => ({
  type: RESET_FALSE,
});

export const addPostRequest = (data: any) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addPostSuccess = (data: any) => ({
  type: ADD_POST_SUCCESS,
  data,
});

export const addPostError = (error: any) => ({
  type: ADD_POST_ERROR,
  error,
});

export const getPostRequest = (lastId: number) => ({
  type: GET_POST_REQUEST,
  lastId,
});

export const getPostSuccess = (data: any) => ({
  type: GET_POST_SUCCESS,
  data,
});

export const getPostError = (error: any) => ({
  type: GET_POST_ERROR,
  error,
});

export const updatePostRequest = (data: any) => ({
  type: UPDATE_POST_REQUEST,
  data,
});

export const updatePostSuccess = (data: any) => ({
  type: UPDATE_POST_SUCCESS,
  data,
});

export const updatePostError = (error: any) => ({
  type: UPDATE_POST_ERROR,
  error,
});

export const removePostRequest = (data: any) => ({
  type: REMOVE_POST_REQUEST,
  data,
});

export const removePostSuccess = (data: any) => ({
  type: REMOVE_POST_SUCCESS,
  data,
});

export const removePostError = (error: any) => ({
  type: REMOVE_POST_ERROR,
  error,
});

export const addCommentRequest = (data: any) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

export const addCommentSuccess = (data: any) => ({
  type: ADD_COMMENT_SUCCESS,
  data,
});

export const addCommentError = (error: any) => ({
  type: ADD_COMMENT_ERROR,
  error,
});

export const getCommentRequest = (data: any) => ({
  type: GET_COMMENT_REQUEST,
  data,
});

export const getCommentSuccess = (data: any) => ({
  type: GET_COMMENT_SUCCESS,
  data,
});

export const getCommentError = (error: any) => ({
  type: GET_COMMENT_ERROR,
  error,
});

export const updateCommentRequest = (data: any) => ({
  type: UPDATE_COMMENT_REQUEST,
  data,
});

export const updateCommentSuccess = (data: any) => ({
  type: UPDATE_COMMENT_SUCCESS,
  data,
});

export const updateCommentError = (error: any) => ({
  type: UPDATE_COMMENT_ERROR,
  error,
});

export const removeCommentRequest = (data: any) => ({
  type: REMOVE_COMMENT_REQUEST,
  data,
});

export const removeCommentSuccess = (data: any) => ({
  type: REMOVE_COMMENT_SUCCESS,
  data,
});

export const removeCommentError = (error: any) => ({
  type: REMOVE_COMMENT_ERROR,
  error,
});

export const searchRequest = (data: any) => ({
  type: SEARCH_REQUEST,
  data,
});

export const searchSuccess = (data: any) => ({
  type: SEARCH_SUCCESS,
  data,
});

export const searchError = (error: any) => ({
  type: SEARCH_ERROR,
  error,
});

export const updateCommentClicked = (id: number) => ({
  type: UPDATE_COMMENT_CLICKED,
  id,
});

export const blockIgnorePost = (data: any) => ({
  type: BLOCK_IGNORE_POST,
  data,
});

export const unblockIgnorePost = (data: any) => ({
  type: UNBLOCK_IGNORE_POST,
  data,
});

export const addLike = (data: any) => ({
  type: ADD_LIKE,
  data,
});

export const removeLike = (data: any) => ({
  type: REMOVE_LIKE,
  data,
});

export const updateProfileImage = (data: any) => ({
  type: UPDATE_PROFILE_IMAGE,
  data,
});

export const removeProfileImagePost = (data: any) => ({
  type: REMOVE_PROFILE_IMAGE,
  data,
});

const actions = {
  getPostRequest,
  getPostSuccess,
  getPostError,
  addPostRequest,
  addPostSuccess,
  addPostError,
  updatePostRequest,
  updatePostSuccess,
  updatePostError,
  removePostRequest,
  removePostSuccess,
  removePostError,
  getCommentRequest,
  getCommentSuccess,
  getCommentError,
  addCommentRequest,
  addCommentSuccess,
  addCommentError,
  updateCommentRequest,
  updateCommentSuccess,
  updateCommentError,
  updateCommentClicked,
  removeCommentRequest,
  removeCommentSuccess,
  removeCommentError,
  searchRequest,
  searchSuccess,
  searchError,
  blockIgnorePost,
  unblockIgnorePost,
  addLike,
  removeLike,
  updateProfileImage,
  removeProfileImagePost,
  resetTrue,
  resetFalse,
};

type Actions = ActionType<typeof actions>;

export default function postReducer(
  state: PostState = postState,
  action: Actions,
) {
  return produce(state, (draft: Draft<typeof postState>) => {
    switch (action.type) {
      case GET_POST_REQUEST:
        draft.getPostLoading = true;
        draft.getPostDone = false;
        draft.getPostError = null;
        break;
      case GET_POST_SUCCESS:
        draft.getPostLoading = false;
        draft.getPostDone = true;
        draft.getPostError = null;
        draft.userPost = draft.userPost.concat(action.data);
        draft.isMoreLoadingPosts = action.data.length === 5;
        break;
      case GET_POST_ERROR:
        draft.getPostLoading = false;
        draft.getPostDone = false;
        draft.getPostError = action.error;
        break;
      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      case ADD_POST_SUCCESS:
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.addPostError = null;
        draft.userPost.push(action.data);
        break;
      case ADD_POST_ERROR:
        draft.addPostLoading = false;
        draft.addPostDone = false;
        draft.addPostError = action.error;
        break;
      case UPDATE_POST_REQUEST:
        draft.updatePostLoading = true;
        draft.updatePostDone = false;
        draft.updatePostError = null;
        break;
      case UPDATE_POST_SUCCESS:
        draft.updatePostLoading = false;
        draft.updatePostDone = true;
        draft.updatePostError = null;
        draft.userPost.find((info) => info.id === action.data.id).title =
          action.data.title;
        draft.userPost.find((info) => info.id === action.data.id).content =
          action.data.content;
        break;
      case UPDATE_POST_ERROR:
        draft.updatePostLoading = false;
        draft.updatePostDone = false;
        draft.updatePostError = action.error;
        break;
      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.removePostError = null;
        draft.userPost = draft.userPost.filter(
          (info) => info.id !== action.data.id,
        );
        break;
      case REMOVE_POST_ERROR:
        draft.removePostLoading = false;
        draft.removePostDone = false;
        draft.removePostError = action.error;
        break;
      case BLOCK_IGNORE_POST:
        draft.userPost = action.data.posts;
        break;
      case UNBLOCK_IGNORE_POST:
        draft.userPost = action.data.posts;
        break;
      // COMMENT
      case GET_COMMENT_REQUEST:
        draft.getCommentLoading = true;
        draft.getCommentDone = false;
        draft.getCommentError = null;
        break;
      case GET_COMMENT_SUCCESS:
        draft.getCommentLoading = false;
        draft.getCommentDone = true;
        draft.getCommentError = null;
        draft.userPost.find((info) => info.id === action.data.id).Comments =
          action.data.comment;
        break;
      case GET_COMMENT_ERROR:
        draft.getCommentLoading = false;
        draft.getCommentDone = false;
        draft.getCommentError = action.error;
        break;
      case UPDATE_COMMENT_REQUEST:
        draft.updateCommentLoading = true;
        draft.updateCommentDone = false;
        draft.updateCommentError = null;
        break;
      case UPDATE_COMMENT_SUCCESS:
        draft.updateCommentLoading = false;
        draft.updateCommentDone = true;
        draft.updateCommentError = null;
        draft.userPost
          .find((info) => info.id === action.data.PostId)
          .Comments.find((i: any) => i.id === action.data.id).content =
          action.data.content;
        break;
      case UPDATE_COMMENT_ERROR:
        draft.updateCommentLoading = false;
        draft.updateCommentDone = false;
        draft.updateCommentError = action.error;
        break;
      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      case ADD_COMMENT_SUCCESS: {
        draft.userPost
          .find((i) => i.id === action.data.PostId)
          .Comments.push(action.data);
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        draft.addCommentError = null;
        break;
      }
      case ADD_COMMENT_ERROR:
        draft.addCommentLoading = false;
        draft.addCommentDone = false;
        draft.addCommentError = action.error;
        break;
      case REMOVE_COMMENT_REQUEST:
        draft.removeCommentLoading = true;
        draft.removeCommentDone = false;
        draft.removeCommentError = null;
        break;
      case REMOVE_COMMENT_SUCCESS: {
        draft.removeCommentLoading = false;
        draft.removeCommentDone = true;
        draft.removeCommentError = null;
        let a = draft.userPost.find((i) => i.id === action.data.PostId);
        a.Comments = a.Comments.filter(
          (info: any) => info.id !== action.data.id,
        );
        break;
      }
      case REMOVE_COMMENT_ERROR:
        draft.removeCommentLoading = false;
        draft.removeCommentDone = false;
        draft.removeCommentError = action.error;
        break;
      case UPDATE_COMMENT_CLICKED:
        draft.updateCommentClicked = !draft.updateCommentClicked;
        draft.updateCommentId = action.id;
        break;
      case ADD_LIKE:
        draft.userPost
          .find((info) => info.id === action.data.id)
          .Likes.push({
            username: action.data.username,
            like: { UserId: action.data.UserId },
          });
        break;
      case REMOVE_LIKE:
        draft.userPost.find(
          (info) => info.id === action.data.id,
        ).Likes = draft.userPost
          .find((info) => info.id === action.data.id)
          .Likes.filter((info: any) => info.like.UserId !== action.data.UserId);
        break;
      case UPDATE_PROFILE_IMAGE:
        draft.userPost.forEach((info) => {
          if (info.UserId === parseInt(action.data.id, 10)) {
            info.User.ProfileImage.src = action.data.src;
          }
        });
        break;
      case REMOVE_PROFILE_IMAGE:
        draft.userPost.forEach((info) => {
          if (info.UserId === action.data.id) {
            info.User.ProfileImage.src = '';
          }
        });
        break;
      case SEARCH_REQUEST:
        draft.searchLoading = true;
        draft.searchDone = false;
        draft.searchError = null;
        break;
      case SEARCH_SUCCESS: {
        draft.searchLoading = false;
        draft.searchDone = true;
        draft.searchError = null;
        draft.userPost = action.data;
        break;
      }
      case SEARCH_ERROR:
        draft.searchLoading = false;
        draft.searchDone = false;
        draft.searchError = action.error;
        break;
      case RESET_TRUE:
        draft.resetting = true;
        break;
      case RESET_FALSE:
        draft.resetting = false;
        break;
      default:
        break;
    }
  });
}
