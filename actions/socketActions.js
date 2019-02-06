export const actionTypes = {
  resetSocket: 'RESET_SOCKET',
  setSocket: 'SET_SOCKET',
};

export const resetSocket = () => ({
  type: actionTypes.resetSocket,
});

export const setSocket = socket => ({
  type: actionTypes.resetSocket,
  socket,
});
