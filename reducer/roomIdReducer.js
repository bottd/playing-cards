import { actionTypes } from '../actions';

const initialState = '';

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.resetRoomID:
      return initialState;
    case actionTypes.updateRoomID:
      return action.roomID;
    default:
      return state;
  }
}
