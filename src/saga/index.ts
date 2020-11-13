import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './login';
import userSaga from './user';
import postSaga from './post';
import { baseUrl } from '../config/config';

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(userSaga), fork(postSaga)]);
}
