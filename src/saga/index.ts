import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import loginSaga from './login';
import userSaga from './user';
import postSaga from './post';

axios.defaults.baseURL = 'http://localhost:3010';
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(userSaga), fork(postSaga)]);
}
