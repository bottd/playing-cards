import { actionTypes } from '../actions/socketActions';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.resetSocket:
      return initialState;
    case actionTypes.setSocket:
      return action.socket;
    default:
      return state;
  }
}
