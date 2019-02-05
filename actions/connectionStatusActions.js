export const actionTypes = {
  connectToGame: 'CONNECT_TO_GAME',
  disconnectFromGame: 'DISCONNECT_FROM_GAME',
}

export const connectToGame = () => ({
  type: actionTypes.connectToGame,
});

export const disconnectFromGame = () => ({
  type: actionTypes.disconnectFromGame,
});
