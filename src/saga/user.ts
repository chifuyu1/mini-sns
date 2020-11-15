import { all, fork, takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_FRIEND_REQUEST,
  ADD_FRIEND_SUCCESS,
  ADD_FRIEND_ERROR,
  REMOVE_FRIEND_REQUEST,
  REMOVE_FRIEND_SUCCESS,
  REMOVE_FRIEND_ERROR,
  ADD_IGNORE_REQUEST,
  ADD_IGNORE_SUCCESS,
  ADD_IGNORE_ERROR,
  REMOVE_IGNORE_REQUEST,
  REMOVE_IGNORE_SUCCESS,
  REMOVE_IGNORE_ERROR,
  UPLOAD_PROFILE_IMAGE_REQUEST,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_ERROR,
  ADD_LIKE_REQUEST,
  ADD_LIKE_SUCCESS,
  ADD_LIKE_ERROR,
  REMOVE_LIKE_REQUEST,
  REMOVE_LIKE_SUCCESS,
  REMOVE_LIKE_ERROR,
  REMOVE_PROFILE_IMAGE_REQUEST,
  REMOVE_PROFILE_IMAGE_SUCCESS,
  REMOVE_PROFILE_IMAGE_ERROR,
  BLOCK_IGNORE_REQUEST,
  BLOCK_IGNORE_SUCCESS,
  BLOCK_IGNORE_ERROR,
  UNBLOCK_IGNORE_REQUEST,
  UNBLOCK_IGNORE_SUCCESS,
  UNBLOCK_IGNORE_ERROR,
} from '../reducer/user';
import {
  ADD_LIKE,
  BLOCK_IGNORE_POST,
  removeProfileImagePost,
  REMOVE_LIKE,
  UNBLOCK_IGNORE_POST,
  updateProfileImage,
} from '../reducer/post';

// FRIEND
// ADD FRIEND
function addFriendAPI(data: any) {
  return axios.patch(`/user/addFriend/${data.myId}/${data.id}`, data);
}

function* addFriend(action: any) {
  try {
    const result = yield call(addFriendAPI, action.data);
    yield put({
      type: ADD_FRIEND_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_FRIEND_ERROR,
      error: err.response.data,
    });
  }
}

function* watchAddFriend() {
  yield takeLatest(ADD_FRIEND_REQUEST, addFriend);
}

// REMOVE FRIEND
function removeFriendAPI(data: any) {
  return axios.delete(`/user/removeFriend/${data.myId}/${data.id}`);
}

function* removeFriend(action: any) {
  try {
    const result = yield call(removeFriendAPI, action.data);
    yield put({
      type: REMOVE_FRIEND_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_FRIEND_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemoveFriend() {
  yield takeLatest(REMOVE_FRIEND_REQUEST, removeFriend);
}

// IGNORE
// ADD IGNORE
function addIgnoreAPI(data: any) {
  return axios.patch(`/user/addIgnore/${data.myId}/${data.id}`, data);
}

function* addIgnore(action: any) {
  try {
    const result = yield call(addIgnoreAPI, action.data);
    yield put({
      type: ADD_IGNORE_SUCCESS,
      data: result.data,
    });
    // yield put({
    //   type: IGNORE_POST,
    //   data: result.data.posts,
    // });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_IGNORE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchAddIgnore() {
  yield takeLatest(ADD_IGNORE_REQUEST, addIgnore);
}

// REMOVE IGNORE
function removeIgnoreAPI(data: any) {
  return axios.delete(`/user/removeIgnore/${data.myId}/${data.id}`);
}

function* removeIgnore(action: any) {
  try {
    const result = yield call(removeIgnoreAPI, action.data);
    yield put({
      type: REMOVE_IGNORE_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_IGNORE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemoveIgnore() {
  yield takeLatest(REMOVE_IGNORE_REQUEST, removeIgnore);
}

// BLOCK IGNORE
function blockIgnoreAPI() {
  return axios.get(`/post/blockIgnore`);
}

function* blockIgnore() {
  try {
    const result = yield call(blockIgnoreAPI);
    yield put({
      type: BLOCK_IGNORE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: BLOCK_IGNORE_POST,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: BLOCK_IGNORE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchBlockIgnore() {
  yield takeLatest(BLOCK_IGNORE_REQUEST, blockIgnore);
}

// UNBLOCK IGNORE
function unblockIgnoreAPI() {
  return axios.get(`/post/unblockIgnore`);
}

function* unblockIgnore() {
  try {
    const result = yield call(unblockIgnoreAPI);
    yield put({
      type: UNBLOCK_IGNORE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: UNBLOCK_IGNORE_POST,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UNBLOCK_IGNORE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchUnblockIgnore() {
  yield takeLatest(UNBLOCK_IGNORE_REQUEST, unblockIgnore);
}

// UPLOAD PROFILE IMAGE
function uploadProfileImageAPI(data: any) {
  return axios.patch(`/user/profileImage/`, data);
}

function* uploadProfileImage(action: any) {
  try {
    const result = yield call(uploadProfileImageAPI, action.data);
    yield put({
      type: UPLOAD_PROFILE_IMAGE_SUCCESS,
      data: result.data,
    });
    yield put(updateProfileImage(result.data));
  } catch (err) {
    console.error(err);
    yield put({
      type: UPLOAD_PROFILE_IMAGE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchUploadProfileImage() {
  yield takeLatest(UPLOAD_PROFILE_IMAGE_REQUEST, uploadProfileImage);
}

// REMOVE PROFILE IMAGE
function removeProfileImageAPI(data: any) {
  return axios.patch(`/user/profileImage/${data.id}`, data);
}

function* removeProfileImage(action: any) {
  try {
    const result = yield call(removeProfileImageAPI, action.data);
    yield put({
      type: REMOVE_PROFILE_IMAGE_SUCCESS,
    });
    yield put(removeProfileImagePost(result.data));
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_PROFILE_IMAGE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemoveProfileImage() {
  yield takeLatest(REMOVE_PROFILE_IMAGE_REQUEST, removeProfileImage);
}

// ADD LIKE
function likeAPI(data: any) {
  return axios.post(`/user/like/${data.UserId}/${data.PostId}`, data);
}

function* like(action: any) {
  try {
    const result = yield call(likeAPI, action.data);
    yield put({
      type: ADD_LIKE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: ADD_LIKE,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_LIKE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchAddLike() {
  yield takeLatest(ADD_LIKE_REQUEST, like);
}

// REMOVE LIKE
function unlikeAPI(data: any) {
  return axios.delete(`/user/unlike/${data.UserId}/${data.PostId}`, data);
}

function* unlike(action: any) {
  try {
    const result = yield call(unlikeAPI, action.data);
    console.log(result.data);
    yield put({
      type: REMOVE_LIKE_SUCCESS,
      data: result.data,
    });
    yield put({
      type: REMOVE_LIKE,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_LIKE_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemoveLike() {
  yield takeLatest(REMOVE_LIKE_REQUEST, unlike);
}

export default function* userSaga() {
  yield all([
    fork(watchAddFriend),
    fork(watchRemoveFriend),
    fork(watchAddIgnore),
    fork(watchRemoveIgnore),
    fork(watchUploadProfileImage),
    fork(watchAddLike),
    fork(watchRemoveLike),
    fork(watchRemoveProfileImage),
    fork(watchBlockIgnore),
    fork(watchUnblockIgnore),
  ]);
}
