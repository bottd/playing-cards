export const actionTypes = {
  resetOwner: 'RESET_OWNER',
  setOwner: 'SET_OWNER',
}

export const resetOwner = () => ({
  type: actionTypes.resetOwner,
});

export const setOwner = () => ({
  type: actionTypes.setOwner,
});
