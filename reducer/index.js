import { combineReducers } from 'redux';
import connectionStatusReducer from './connectionStatusReducer';
import handReducer from './handReducer';
import ownerReducer from './ownerReducer';
import roomIdReducer from './roomIdReducer';
import userIdReducer from './userIdReducer';
import usernameReducer from './usernameReducer';

export default combineReducers({
  connected: connectionStatusReducer,
  hand: handReducer,
  owner: ownerReducer,
  roomID: roomIdReducer,
  userID: userIdReducer,
  username: usernameReducer,
});
