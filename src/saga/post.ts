import { all, fork, takeLatest, put, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  GET_COMMENT_REQUEST,
  GET_COMMENT_SUCCESS,
  GET_COMMENT_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_ERROR,
  UPDATE_COMMENT_REQUEST,
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_ERROR,
  REMOVE_COMMENT_REQUEST,
  REMOVE_COMMENT_SUCCESS,
  REMOVE_COMMENT_ERROR,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
  REMOVE_POST_ERROR,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_ERROR,
  resetFalse,
} from '../reducer/post';

// ======== POST ========
// GET POST
function getPostAPI(lastId: number) {
  return axios.get(`/post?lastId=${lastId || 0}`);
}

function* getPost(action: any) {
  try {
    const result = yield call(getPostAPI, action.lastId);
    yield put({
      type: GET_POST_SUCCESS,
      data: result.data,
    });
    yield put(resetFalse());
  } catch (error) {
    console.error(error);
    yield put({
      type: GET_POST_ERROR,
      error: error.response.data,
    });
  }
}

function* watchGetPost() {
  yield throttle(5000, GET_POST_REQUEST, getPost);
}

// ADD POST
function addPostAPI(data: any) {
  return axios.post(`/post`, data);
}

function* addPost(action: any) {
  try {
    const result = yield call(addPostAPI, action.data);
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_POST_ERROR,
      error: err.response.data,
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

// UPDATE POST
function updatePostAPI(data: any) {
  return axios.patch(`/post`, data);
}

function* updatePost(action: any) {
  try {
    const result = yield call(updatePostAPI, action.data);
    yield put({
      type: UPDATE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_POST_ERROR,
      error: err.response.data,
    });
  }
}

function* watchUpdatePost() {
  yield takeLatest(UPDATE_POST_REQUEST, updatePost);
}

// DELETE POST
function removePostAPI(data: any) {
  return axios.delete(`/post/${data.id}`);
}

function* removePost(action: any) {
  try {
    const result = yield call(removePostAPI, action.data);
    yield put({
      type: REMOVE_POST_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_POST_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}
// SEARCH POST
function searchPostAPI(data: any) {
  return axios.post(`/post/search`, data);
}

function* searchPost(action: any) {
  try {
    const result = yield call(searchPostAPI, action.data);
    yield put({
      type: SEARCH_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_ERROR,
      error: err.response.data,
    });
  }
}

function* watchSearchPost() {
  yield takeLatest(SEARCH_REQUEST, searchPost);
}

// =========== COMMENT ===========
// ADD COMMENT
function addCommentAPI(data: any) {
  return axios.post(`/comment`, data);
}

function* addComment(action: any) {
  try {
    const result = yield call(addCommentAPI, action.data);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_ERROR,
      error: err.response.data,
    });
  }
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

// UPDATE COMMENT
function updateCommentAPI(data: any) {
  return axios.patch(`/comment`, data);
}

function* updateComment(action: any) {
  try {
    const result = yield call(updateCommentAPI, action.data);
    yield put({
      type: UPDATE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: UPDATE_COMMENT_ERROR,
      error: err.response.data,
    });
  }
}

function* watchUpdateComment() {
  yield throttle(5000, UPDATE_COMMENT_REQUEST, updateComment);
}

// GET COMMENT
function getCommentAPI(data: any) {
  return axios.get(`/comment/${data.commentId}`);
}

function* getComment(action: any) {
  try {
    const result = yield call(getCommentAPI, action.data);
    yield put({
      type: GET_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_COMMENT_ERROR,
      error: err.response.data,
    });
  }
}

function* watchGetComment() {
  yield throttle(5000, GET_COMMENT_REQUEST, getComment);
}

// REMOVE COMMENT
function removeCommentAPI(data: any) {
  return axios.delete(`/comment/${data.PostId}/${data.id}`);
}

function* removeComment(action: any) {
  try {
    const result = yield call(removeCommentAPI, action.data);
    yield put({
      type: REMOVE_COMMENT_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_COMMENT_ERROR,
      error: err.response.data,
    });
  }
}

function* watchRemoveComment() {
  yield takeLatest(REMOVE_COMMENT_REQUEST, removeComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchGetPost),
    fork(watchUpdatePost),
    fork(watchRemovePost),
    fork(watchGetComment),
    fork(watchAddComment),
    fork(watchUpdateComment),
    fork(watchRemoveComment),
    fork(watchSearchPost),
  ]);
}
