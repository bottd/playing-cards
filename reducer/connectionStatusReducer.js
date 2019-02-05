import { actionTypes } from '../actions/connectionStatusActions';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.connectToGame:
      return true;
    case actionTypes.disconnectFromGame:
      return false;
    default:
      return state;
  }
}
