import { actionTypes } from '../actions/userIdActions';

const initialState = null;

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.resetUserID:
      return initialState;
    case actionTypes.setUserID:
      return action.id;
    default:
      return state;
  }
}
