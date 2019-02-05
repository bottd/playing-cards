export const actionTypes = {
  addCardToHand: 'ADD_CARD_TO_HAND',
  connectToGame: 'CONNECT_TO_GAME',
  createGame: 'CREATE_GAME',
  dealCard: 'DEAL_CARD',
  discardCard: 'DISCARD_CARD',
  discardHand: 'DISCARD_HAND',
  disconnectFromGame: 'DISCONNECT_FROM_GAME',
  endGame: 'END_GAME',
  hideCard: 'HIDE_CARD',
  resetRoomID: 'RESET_ROOM_ID',
  resetUserID: 'RESET_USER_ID',
  resetUsername: 'RESET_USERNAME',
  revealCard: 'REVEAL_CARD',
  setUserID: 'SET_USER_ID',
  updateRoomID: 'UPDATE_ROOM_ID',
  updateUsername: 'UPDATE_USERNAME',
};

export const addCardToHand = card => ({
  type: actionTypes.addCardToHand,
  card,
});

export const connectToGame = () => ({
  type: actionTypes.connectToGame,
});

export const createGame = () => ({
  type: actionTypes.createGame,
});

export const dealCard = (card, playerID) => ({
  type: actionTypes.dealCard,
  card,
  playerID,
});

export const discardCard = card => ({
  type: actionTypes.discardCard,
  card,
});

export const discardHand = () => ({
  type: actionTypes.discardHand,
});

export const disconnectFromGame = () => ({
  type: actionTypes.disconnectFromGame,
});

export const endGame = () => ({
  type: actionTypes.endGame,
});

export const hideCard = () => ({
  type: actionTypes.hideCard,
});

export const resetRoomID = () => ({
  type: actionTypes.resetRoomID,
});

export const resetUsername = () => ({
  type: actionTypes.resetUsername,
});

export const resetUserID = () => ({
  type: actionTypes.resetUserID,
});

export const revealCard = card => ({
  type: actionTypes.revealCard,
});

export const setUserID = id => ({
  type: actionTypes.setUserID,
});

export const updateRoomID = id => ({
  type: actionTypes.updateRoomID,
  id,
});

export const updateUsername = username => ({
  type: actionTypes.updateUsername,
  username,
});
