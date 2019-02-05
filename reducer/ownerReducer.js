import { actionTypes } from '../actions';

const initialState = false;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.resetOwner:
      return initialState;
    case actionTypes.setOwner:
      return true;
    default:
      return state;
  }
}
