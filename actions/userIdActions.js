export const actionTypes = {
  resetUserID: 'RESET_USER_ID',
  setUserID: 'SET_USER_ID',
}

export const resetUserID = () => ({
  type: actionTypes.resetUserID,
});

export const setUserID = id => ({
  type: actionTypes.setUserID,
});
