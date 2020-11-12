import { all, fork, takeLatest, put, call, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOGIN_REQUEST,
  LOGIN_ERROR,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  loginSuccess,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOAD_USER_REQUEST,
  LOAD_USER_ERROR,
  loadUserSuccess,
} from '../reducer/user';

// LOG IN
function loginAPI(data: any) {
  return axios.post('/login/signin', data);
}

function* login(action: any) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put(loginSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put({
      type: LOGIN_ERROR,
      error: error.response.data,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

// LOG IN LOAD
function loadUserAPI() {
  return axios.get(`/login/user`);
}

function* loadUser() {
  try {
    const result = yield call(loadUserAPI);
    yield put(loadUserSuccess(result.data));
  } catch (error) {
    console.error(error);
    yield put({
      type: LOAD_USER_ERROR,
      error: error.response.data,
    });
  }
}

function* watchLoadUser() {
  yield throttle(5000, LOAD_USER_REQUEST, loadUser);
}

// LOG OUT
function logoutAPI() {
  return axios.post('/login/logout');
}

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGOUT_ERROR,
      error: err.response.data,
    });
  }
}

function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

// SIGN UP
function signupAPI(data: any) {
  return axios.post('/login/signup', data);
}

function* signup(action: any) {
  try {
    const result = yield call(signupAPI, action.data);
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGNUP_ERROR,
      error: err.response.data,
    });
  }
}

function* watchSignup() {
  yield takeLatest(SIGNUP_REQUEST, signup);
}

export default function* loginSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchSignup),
    fork(watchLoadUser),
  ]);
}
