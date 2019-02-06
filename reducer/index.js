import { combineReducers } from 'redux';
import connectionStatusReducer from './connectionStatusReducer';
import handReducer from './handReducer';
import ownerReducer from './ownerReducer';
import roomIdReducer from './roomIdReducer';
import socketReducer from './socketReducer';
import userIdReducer from './userIdReducer';
import usernameReducer from './usernameReducer';

export const initialState = {
  connected: false,
  hand: [],
  owner: false,
  roomID: '',
  socket: null,
  userID: null,
  userID: '',
  username: '',
};

export default combineReducers({
  connected: connectionStatusReducer,
  hand: handReducer,
  owner: ownerReducer,
  roomID: roomIdReducer,
  socket: socketReducer,
  userID: userIdReducer,
  username: usernameReducer,
});
