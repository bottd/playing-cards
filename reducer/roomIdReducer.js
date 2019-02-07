import { actionTypes } from '../actions/roomIdActions';

const initialState = '';

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.resetRoomID:
      return initialState;
    case actionTypes.updateRoomID:
      return action.id;
    default:
      return state;
  }
}
