import { ActionType } from 'typesafe-actions';
import produce, { Draft } from 'immer';

type UserState = {
  userInfo: null | any;
  imageProfile: any;
  loginLoading: boolean;
  loginDone: boolean | any;
  loginError: null | any;
  logoutLoading: boolean;
  logoutDone: boolean | any;
  logoutError: null | any;
  signupLoading: boolean;
  signupDone: boolean | any;
  signupError: null | any;
  loadUserLoading: boolean;
  loadUserDone: boolean | any;
  loadUserError: null | any;
  addFriendLoading: boolean;
  addFriendDone: boolean | any;
  addFriendError: null | any;
  removeFriendLoading: boolean;
  removeFriendDone: boolean | any;
  removeFriendError: null | any;
  addIgnoreLoading: boolean;
  addIgnoreDone: boolean | any;
  addIgnoreError: null | any;
  removeIgnoreLoading: boolean;
  removeIgnoreDone: boolean | any;
  removeIgnoreError: null | any;
  blockIgnoreLoading: boolean;
  blockIgnoreDone: boolean | any;
  blockIgnoreError: null | any;
  unblockIgnoreLoading: boolean;
  unblockIgnoreDone: boolean | any;
  unblockIgnoreError: null | any;
  uploadProfileImageLoading: boolean;
  uploadProfileImageDone: boolean | any;
  uploadProfileImageError: null | any;
  removeProfileImageLoading: boolean;
  removeProfileImageDone: boolean | any;
  removeProfileImageError: null | any;
  addLikeLoading: boolean;
  addLikeDone: boolean | any;
  addLikeError: null | any;
  removeLikeLoading: boolean;
  removeLikeDone: boolean | any;
  removeLikeError: null | any;
};

const userState: UserState = {
  userInfo: null,
  imageProfile: [],
  loginLoading: false,
  loginDone: false,
  loginError: null,
  logoutLoading: false,
  logoutDone: false,
  logoutError: null,
  signupLoading: false,
  signupDone: false,
  signupError: null,
  loadUserLoading: false,
  loadUserDone: false,
  loadUserError: null,
  addFriendLoading: false,
  addFriendDone: false,
  addFriendError: null,
  removeFriendLoading: false,
  removeFriendDone: false,
  removeFriendError: null,
  addIgnoreLoading: false,
  addIgnoreDone: false,
  addIgnoreError: null,
  removeIgnoreLoading: false,
  removeIgnoreDone: false,
  removeIgnoreError: null,
  blockIgnoreLoading: false,
  blockIgnoreDone: false,
  blockIgnoreError: null,
  unblockIgnoreLoading: false,
  unblockIgnoreDone: false,
  unblockIgnoreError: null,
  uploadProfileImageLoading: false,
  uploadProfileImageDone: false,
  uploadProfileImageError: null,
  removeProfileImageLoading: false,
  removeProfileImageDone: false,
  removeProfileImageError: null,
  addLikeLoading: false,
  addLikeDone: false,
  addLikeError: null,
  removeLikeLoading: false,
  removeLikeDone: false,
  removeLikeError: null,
};

// LOGIN
export const LOGIN_REQUEST = 'LOGIN_REQUEST' as const;
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS' as const;
export const LOGIN_ERROR = 'LOGIN_ERROR' as const;
export const LOGIN_INITIALIZE = 'LOGIN_INITIALIZE' as const;

// LOGOUT
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST' as const;
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS' as const;
export const LOGOUT_ERROR = 'LOGOUT_ERROR' as const;

// SIGN UP
export const SIGNUP_REQUEST = 'SIGNUP_REQUEST' as const;
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS' as const;
export const SIGNUP_ERROR = 'SIGNUP_ERROR' as const;

// LOAD USER
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST' as const;
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS' as const;
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR' as const;

// ADD FRIEND
export const ADD_FRIEND_REQUEST = 'ADD_FRIEND_REQUEST' as const;
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS' as const;
export const ADD_FRIEND_ERROR = 'ADD_FRIEND_ERROR' as const;

// REMOVE FRIEND
export const REMOVE_FRIEND_REQUEST = 'REMOVE_FRIEND_REQUEST' as const;
export const REMOVE_FRIEND_SUCCESS = 'REMOVE_FRIEND_SUCCESS' as const;
export const REMOVE_FRIEND_ERROR = 'REMOVE_FRIEND_ERROR' as const;

// ADD IGNORE
export const ADD_IGNORE_REQUEST = 'ADD_IGNORE_REQUEST' as const;
export const ADD_IGNORE_SUCCESS = 'ADD_IGNORE_SUCCESS' as const;
export const ADD_IGNORE_ERROR = 'ADD_IGNORE_ERROR' as const;

// REMOVE IGNORE
export const REMOVE_IGNORE_REQUEST = 'REMOVE_IGNORE_REQUEST' as const;
export const REMOVE_IGNORE_SUCCESS = 'REMOVE_IGNORE_SUCCESS' as const;
export const REMOVE_IGNORE_ERROR = 'REMOVE_IGNORE_ERROR' as const;

// BLOCK IGNORE
export const BLOCK_IGNORE_REQUEST = 'BLOCK_IGNORE_REQUEST' as const;
export const BLOCK_IGNORE_SUCCESS = 'BLOCK_IGNORE_SUCCESS' as const;
export const BLOCK_IGNORE_ERROR = 'BLOCK_IGNORE_ERROR' as const;

// UNBLOCK IGNORE
export const UNBLOCK_IGNORE_REQUEST = 'UNBLOCK_IGNORE_REQUEST' as const;
export const UNBLOCK_IGNORE_SUCCESS = 'UNBLOCK_IGNORE_SUCCESS' as const;
export const UNBLOCK_IGNORE_ERROR = 'UNBLOCK_IGNORE_ERROR' as const;

// UPLOAD PROFILE IMAGE
export const UPLOAD_PROFILE_IMAGE_REQUEST = 'UPLOAD_PROFILE_IMAGE_REQUEST' as const;
export const UPLOAD_PROFILE_IMAGE_SUCCESS = 'UPLOAD_PROFILE_IMAGE_SUCCESS' as const;
export const UPLOAD_PROFILE_IMAGE_ERROR = 'UPLOAD_PROFILE_IMAGE_ERROR' as const;

// ADD LIKE
export const ADD_LIKE_REQUEST = 'ADD_LIKE_REQUEST' as const;
export const ADD_LIKE_SUCCESS = 'ADD_LIKE_SUCCESS' as const;
export const ADD_LIKE_ERROR = 'ADD_LIKE_ERROR' as const;

// REMOVE LIKE
export const REMOVE_LIKE_REQUEST = 'REMOVE_LIKE_REQUEST' as const;
export const REMOVE_LIKE_SUCCESS = 'REMOVE_LIKE_SUCCESS' as const;
export const REMOVE_LIKE_ERROR = 'REMOVE_LIKE_ERROR' as const;

export const REMOVE_PROFILE_IMAGE_REQUEST = 'REMOVE_PROFILE_IMAGE_REQUEST' as const;
export const REMOVE_PROFILE_IMAGE_SUCCESS = 'REMOVE_PROFILE_IMAGE_SUCCESS' as const;
export const REMOVE_PROFILE_IMAGE_ERROR = 'REMOVE_PROFILE_IMAGE_ERROR' as const;

export const loginRequest = (data: any) => ({
  type: LOGIN_REQUEST,
  data,
});

export const loginSuccess = (data: any) => ({
  type: LOGIN_SUCCESS,
  data,
});

export const loginError = (error: any) => ({
  type: LOGIN_ERROR,
  error,
});

export const loginInitialze = () => ({
  type: LOGIN_INITIALIZE,
});

export const logoutRequest = () => ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = (data: any) => ({
  type: LOGOUT_SUCCESS,
  data,
});

export const logoutError = (error: any) => ({
  type: LOGOUT_ERROR,
  error,
});

export const signupRequest = (data: any) => ({
  type: SIGNUP_REQUEST,
  data,
});

export const signupSuccess = (data: any) => ({
  type: SIGNUP_SUCCESS,
  data,
});

export const signupError = (error: any) => ({
  type: SIGNUP_ERROR,
  error,
});

export const loadUserRequest = () => ({
  type: LOAD_USER_REQUEST,
});

export const loadUserSuccess = (data: any) => ({
  type: LOAD_USER_SUCCESS,
  data,
});

export const loadUserError = (error: any) => ({
  type: LOAD_USER_ERROR,
  error,
});

export const addFriendRequest = (data: any) => ({
  type: ADD_FRIEND_REQUEST,
  data,
});

export const addFriendSuccess = (data: any) => ({
  type: ADD_FRIEND_SUCCESS,
  data,
});

export const addFriendError = (error: any) => ({
  type: ADD_FRIEND_ERROR,
  error,
});

export const removeFriendRequest = (data: any) => ({
  type: REMOVE_FRIEND_REQUEST,
  data,
});

export const removeFriendSuccess = (data: any) => ({
  type: REMOVE_FRIEND_SUCCESS,
  data,
});

export const removeFriendError = (error: any) => ({
  type: REMOVE_FRIEND_ERROR,
  error,
});

export const addIgnoreRequest = (data: any) => ({
  type: ADD_IGNORE_REQUEST,
  data,
});

export const addIgnoreSuccess = (data: any) => ({
  type: ADD_IGNORE_SUCCESS,
  data,
});

export const addIgnoreError = (error: any) => ({
  type: ADD_IGNORE_ERROR,
  error,
});

export const removeIgnoreRequest = (data: any) => ({
  type: REMOVE_IGNORE_REQUEST,
  data,
});

export const removeIgnoreSuccess = (data: any) => ({
  type: REMOVE_IGNORE_SUCCESS,
  data,
});

export const removeIgnoreError = (error: any) => ({
  type: REMOVE_IGNORE_ERROR,
  error,
});

export const blockIgnoreRequest = () => ({
  type: BLOCK_IGNORE_REQUEST,
});

export const blockIgnoreSuccess = (data: any) => ({
  type: BLOCK_IGNORE_SUCCESS,
  data,
});

export const blockIgnoreError = (error: any) => ({
  type: BLOCK_IGNORE_ERROR,
  error,
});

export const unblockIgnoreRequest = () => ({
  type: UNBLOCK_IGNORE_REQUEST,
});

export const unblockIgnoreSuccess = (data: any) => ({
  type: UNBLOCK_IGNORE_SUCCESS,
  data,
});

export const unblockIgnoreError = (error: any) => ({
  type: UNBLOCK_IGNORE_ERROR,
  error,
});

export const uploadProfileImageRequest = (data: any) => ({
  type: UPLOAD_PROFILE_IMAGE_REQUEST,
  data,
});

export const uploadProfileImageSuccess = (data: any) => ({
  type: UPLOAD_PROFILE_IMAGE_SUCCESS,
  data,
});

export const uploadProfileImageError = (error: any) => ({
  type: UPLOAD_PROFILE_IMAGE_ERROR,
  error,
});

export const addLikeRequest = (data: any) => ({
  type: ADD_LIKE_REQUEST,
  data,
});

export const addLikeSuccess = (data: any) => ({
  type: ADD_LIKE_SUCCESS,
  data,
});

export const addLikeError = (error: any) => ({
  type: ADD_LIKE_ERROR,
  error,
});

export const removeLikeRequest = (data: any) => ({
  type: REMOVE_LIKE_REQUEST,
  data,
});

export const removeLikeSuccess = (data: any) => ({
  type: REMOVE_LIKE_SUCCESS,
  data,
});

export const removeLikeError = (error: any) => ({
  type: REMOVE_LIKE_ERROR,
  error,
});

export const removeProfileImageRequest = (data: any) => ({
  type: REMOVE_PROFILE_IMAGE_REQUEST,
  data,
});

export const removeProfileImageSuccess = () => ({
  type: REMOVE_PROFILE_IMAGE_SUCCESS,
});

export const removeProfileImageError = (error: any) => ({
  type: REMOVE_PROFILE_IMAGE_ERROR,
  error,
});

const actions = {
  loginRequest,
  loginSuccess,
  loginError,
  loginInitialze,
  logoutRequest,
  logoutSuccess,
  logoutError,
  signupRequest,
  signupSuccess,
  signupError,
  loadUserRequest,
  loadUserSuccess,
  loadUserError,
  addFriendRequest,
  addFriendSuccess,
  addFriendError,
  removeFriendRequest,
  removeFriendSuccess,
  removeFriendError,
  addIgnoreRequest,
  addIgnoreSuccess,
  addIgnoreError,
  removeIgnoreRequest,
  removeIgnoreSuccess,
  removeIgnoreError,
  blockIgnoreRequest,
  blockIgnoreSuccess,
  blockIgnoreError,
  unblockIgnoreRequest,
  unblockIgnoreSuccess,
  unblockIgnoreError,
  uploadProfileImageRequest,
  uploadProfileImageSuccess,
  uploadProfileImageError,
  removeProfileImageRequest,
  removeProfileImageSuccess,
  removeProfileImageError,
  addLikeRequest,
  addLikeSuccess,
  addLikeError,
  removeLikeRequest,
  removeLikeSuccess,
  removeLikeError,
};

type Actions = ActionType<typeof actions>;

const userReducer = (state: UserState = userState, action: Actions) =>
  produce(state, (draft: Draft<typeof userState>) => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.loginLoading = true;
        draft.loginDone = false;
        draft.loginError = null;
        break;
      case LOGIN_SUCCESS:
        draft.loginLoading = false;
        draft.loginDone = true;
        draft.userInfo = action.data;
        break;
      case LOGIN_ERROR:
        draft.loginLoading = false;
        draft.loginDone = false;
        draft.loginError = action.error;
        break;
      case LOGIN_INITIALIZE:
        draft.loginError = '';
        break;
      case LOGOUT_REQUEST:
        draft.logoutLoading = true;
        draft.logoutDone = false;
        draft.logoutError = null;
        break;
      case LOGOUT_SUCCESS:
        draft.logoutLoading = false;
        draft.logoutDone = true;
        draft.logoutError = null;
        draft.userInfo = null;
        break;
      case LOGOUT_ERROR:
        draft.logoutLoading = false;
        draft.logoutDone = false;
        draft.logoutError = action.error;
        break;
      case SIGNUP_REQUEST:
        draft.signupLoading = true;
        draft.signupDone = false;
        draft.signupError = null;
        break;
      case SIGNUP_SUCCESS:
        draft.signupLoading = false;
        draft.signupDone = true;
        draft.signupError = null;
        break;
      case SIGNUP_ERROR:
        draft.signupLoading = false;
        draft.signupDone = false;
        draft.signupError = action.error;
        break;
      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;
      case LOAD_USER_SUCCESS:
        draft.loadUserLoading = false;
        draft.loadUserDone = true;
        draft.loadUserError = null;
        draft.userInfo = action.data;
        break;
      case LOAD_USER_ERROR:
        draft.loadUserLoading = false;
        draft.loadUserDone = false;
        draft.loadUserError = action.error;
        break;
      case ADD_FRIEND_REQUEST:
        draft.addFriendLoading = true;
        draft.addFriendDone = false;
        draft.addFriendError = null;
        break;
      case ADD_FRIEND_SUCCESS:
        draft.addFriendLoading = false;
        draft.addFriendDone = true;
        draft.addFriendError = null;
        draft.userInfo.Friending = draft.userInfo.Friending.concat({
          id: action.data.id,
          username: action.data.username,
        }).sort((a: any, b: any) => a.id - b.id);

        break;
      case ADD_FRIEND_ERROR:
        draft.addFriendLoading = false;
        draft.addFriendDone = false;
        draft.addFriendError = action.error;
        break;
      case REMOVE_FRIEND_REQUEST:
        draft.removeFriendLoading = true;
        draft.removeFriendDone = false;
        draft.removeFriendError = null;
        break;
      case REMOVE_FRIEND_SUCCESS:
        draft.removeFriendLoading = false;
        draft.removeFriendDone = true;
        draft.removeFriendError = null;
        draft.userInfo.Friending = draft.userInfo.Friending.filter((f: any) => f.id !== action.data.id).sort(
          (a: any, b: any) => a.id - b.id,
        );
        break;
      case REMOVE_FRIEND_ERROR:
        draft.removeFriendLoading = false;
        draft.removeFriendDone = false;
        draft.removeFriendError = action.error;
        break;
      case ADD_IGNORE_REQUEST:
        draft.addIgnoreLoading = true;
        draft.addIgnoreDone = false;
        draft.addIgnoreError = null;
        break;
      case ADD_IGNORE_SUCCESS:
        draft.addIgnoreLoading = false;
        draft.addIgnoreDone = true;
        draft.addIgnoreError = null;
        draft.userInfo.Ignorings = draft.userInfo.Ignorings.concat({
          id: action.data.id,
          username: action.data.username,
        }).sort((a: any, b: any) => a.id - b.id);

        break;
      case ADD_IGNORE_ERROR:
        draft.addIgnoreLoading = false;
        draft.addIgnoreDone = false;
        draft.addIgnoreError = action.error;
        break;
      case REMOVE_IGNORE_REQUEST:
        draft.removeIgnoreLoading = true;
        draft.removeIgnoreDone = false;
        draft.removeIgnoreError = null;
        break;
      case REMOVE_IGNORE_SUCCESS:
        draft.removeIgnoreLoading = false;
        draft.removeIgnoreDone = true;
        draft.removeIgnoreError = null;
        draft.userInfo.Ignorings = draft.userInfo.Ignorings.filter((f: any) => f.id !== action.data.id).sort(
          (a: any, b: any) => a.id - b.id,
        );
        break;
      case REMOVE_IGNORE_ERROR:
        draft.removeIgnoreLoading = false;
        draft.removeIgnoreDone = false;
        draft.removeIgnoreError = action.error;
        break;
      case BLOCK_IGNORE_REQUEST:
        draft.blockIgnoreLoading = true;
        draft.blockIgnoreDone = false;
        draft.blockIgnoreError = null;
        break;
      case BLOCK_IGNORE_SUCCESS:
        draft.blockIgnoreLoading = false;
        draft.blockIgnoreDone = true;
        draft.blockIgnoreError = null;
        draft.userInfo = action.data.user;
        break;
      case BLOCK_IGNORE_ERROR:
        draft.blockIgnoreLoading = false;
        draft.blockIgnoreDone = false;
        draft.blockIgnoreError = action.error;
        break;
      case UNBLOCK_IGNORE_REQUEST:
        draft.unblockIgnoreLoading = true;
        draft.unblockIgnoreDone = false;
        draft.unblockIgnoreError = null;
        break;
      case UNBLOCK_IGNORE_SUCCESS:
        draft.unblockIgnoreLoading = false;
        draft.unblockIgnoreDone = true;
        draft.unblockIgnoreError = null;
        draft.userInfo = action.data.user;
        break;
      case UNBLOCK_IGNORE_ERROR:
        draft.unblockIgnoreLoading = false;
        draft.unblockIgnoreDone = false;
        draft.unblockIgnoreError = action.error;
        break;
      case ADD_LIKE_REQUEST:
        draft.addLikeLoading = true;
        draft.addLikeDone = false;
        draft.addLikeError = null;
        break;
      case ADD_LIKE_SUCCESS:
        draft.addLikeLoading = false;
        draft.addLikeDone = true;
        draft.userInfo.Likes.push(action.data);
        break;
      case ADD_LIKE_ERROR:
        draft.addLikeLoading = false;
        draft.addLikeDone = false;
        draft.addLikeError = action.error;
        break;
      case REMOVE_LIKE_REQUEST:
        draft.removeLikeLoading = true;
        draft.removeLikeDone = false;
        draft.removeLikeError = null;
        break;
      case REMOVE_LIKE_SUCCESS:
        draft.removeLikeLoading = false;
        draft.removeLikeDone = true;
        draft.userInfo.Likes = draft.userInfo.Likes.filter((info: any) => info.id !== action.data.id);
        break;
      case REMOVE_LIKE_ERROR:
        draft.removeLikeLoading = false;
        draft.removeLikeDone = false;
        draft.removeLikeError = action.error;
        break;
      case UPLOAD_PROFILE_IMAGE_REQUEST:
        draft.uploadProfileImageLoading = true;
        draft.uploadProfileImageDone = false;
        draft.uploadProfileImageError = null;
        break;
      case UPLOAD_PROFILE_IMAGE_SUCCESS:
        draft.uploadProfileImageLoading = false;
        draft.uploadProfileImageDone = true;
        draft.userInfo.ProfileImage = { src: action.data.src };

        break;
      case UPLOAD_PROFILE_IMAGE_ERROR:
        draft.uploadProfileImageLoading = false;
        draft.uploadProfileImageDone = false;
        draft.uploadProfileImageError = action.error;
        break;
      case REMOVE_PROFILE_IMAGE_REQUEST:
        draft.removeProfileImageLoading = true;
        draft.removeProfileImageDone = false;
        draft.removeProfileImageError = null;
        break;
      case REMOVE_PROFILE_IMAGE_SUCCESS:
        draft.removeProfileImageLoading = false;
        draft.removeProfileImageDone = true;
        draft.userInfo.ProfileImage = '';
        break;
      case REMOVE_PROFILE_IMAGE_ERROR:
        draft.removeProfileImageLoading = false;
        draft.removeProfileImageDone = false;
        draft.removeProfileImageError = action.error;
        break;
      default:
        break;
    }
  });

export default userReducer;
