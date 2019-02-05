export const actionTypes = {
  resetUsername: 'RESET_USERNAME',
  updateUsername: 'UPDATE_USERNAME',
}

export const resetUsername = () => ({
  type: actionTypes.resetUsername,
});

export const updateUsername = username => ({
  type: actionTypes.updateUsername,
  username,
});
