export const actionTypes = {
  resetRoomID: 'RESET_ROOM_ID',
  updateRoomID: 'UPDATE_ROOM_ID',
}

export const resetRoomID = () => ({
  type: actionTypes.resetRoomID,
});

export const updateRoomID = id => ({
  type: actionTypes.updateRoomID,
  id,
});
