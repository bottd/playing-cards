import { actionTypes, resetRoomID, updateRoomID } from '../roomIdActions';

describe('roomIdActions', () => {
  describe('action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('resetRoomID', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'RESET_ROOM_ID' };
      const result = resetRoomID();
      expect(result).toEqual(expected);
    });
  });

  describe('updateRoomID', () => {
    it('Should return an action with correct type', () => {
      const expected = 'UPDATE_ROOM_ID';
      const result = updateRoomID(1);
      expect(result.type).toBe(expected);
    });
    it('Should return an action with room id', () => {
      const expected = 1;
      const result = updateRoomID(expected);
      expect(result.id).toBe(expected);
    });
    it('Should match snapshot', () => {
      const result = updateRoomID(1);
      expect(result).toMatchSnapshot();
    });
  });
});
