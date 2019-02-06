import { actionTypes, resetUserID, setUserID } from '../userIdActions';

describe('userIdActions', () => {
  describe('Action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('resetUserID', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'RESET_USER_ID' };
      const result = resetUserID();
      expect(result).toEqual(expected);
    });
  });

  describe('setUserID', () => {
    it('Should return an action with correct type', () => {
      const expected = 'SET_USER_ID';
      const result = setUserID(1);
      expect(result.type).toBe(expected);
    });
    it('Should have the correct id inside the action', () => {
      const expected = 1;
      const result = setUserID(expected);
      expect(result.id).toBe(expected);
    });
    it('Should match snapshot', () => {
      const result = setUserID(1);
      expect(result).toMatchSnapshot();
    });
  });
});
