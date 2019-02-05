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
  revealCard: 'REVEAL_CARD',
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

export const revealCard = card => ({
  type: actionTypes.revealCard,
});
