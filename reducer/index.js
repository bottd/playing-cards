import { actionTypes } from '../actions';

export const initialState = {
  connected: false,
  roomID: '',
  userName: '',
  userID: null,
  owner: false,
  hand: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
