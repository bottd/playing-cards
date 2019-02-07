import { all, delay, call, put, take, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import 'isomorphic-unfetch';
import io from 'socket.io-client';
import actionTypes from '../actions/actionTypes';
import { setSocket } from '../actions/socketActions';
import { connectToGame } from '../actions/connectionStatusActions';

es6promise.polyfill();

function* connectToServer() {
  try {
    const socket = yield io();
    yield put(setSocket(socket));
    yield put(connectToGame());
  } catch (error) {}
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.requestSocket, connectToServer)]);
}

export default rootSaga;
