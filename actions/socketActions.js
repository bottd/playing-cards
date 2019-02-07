export const actionTypes = {
  requestSocket: 'REQUEST_SOCKET',
  resetSocket: 'RESET_SOCKET',
  setSocket: 'SET_SOCKET',
};

export const requestSocket = () => ({
  type: actionTypes.requestSocket,
});

export const resetSocket = () => ({
  type: actionTypes.resetSocket,
});

export const setSocket = socket => ({
  type: actionTypes.setSocket,
  socket,
});
