import { all, delay, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import io from 'socket.io-client'
import { setSocket } from '../actions/socketActions';

es6promise.polyfill();

function connectToServer() {
  return io();
}

function* rootSaga() {
  const socket = yield connectToServer();
  yield put(setSocket(socket));
  yield all([
  ]);
}

export default rootSaga;
