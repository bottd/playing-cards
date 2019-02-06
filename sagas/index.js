import { all, delay, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import io from 'socket.io-client'
import actionTypes from '../actions/actionTypes';
import { setSocket } from '../actions/socketActions';

es6promise.polyfill();

function* connectToServer() {
  const socket = yield io();
  yield put(setSocket(socket));
}

function* rootSaga() {
  yield all([
  ]);
}

export default rootSaga;
