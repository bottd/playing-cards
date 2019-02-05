import { actionTypes } from '../actions/usernameActions';

const initialState = '';

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.updateUsername:
      return action.username;
    case actionTypes.resetUsername:
      return initialState;
    default:
      return state;
  }
}
