import { actionTypes, resetUsername, updateUsername } from '../usernameActions';

describe('usernameActions', () => {
  describe('Action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('resetUsername', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'RESET_USERNAME' };
      const result = resetUsername();
      expect(result).toEqual(expected);
    });
  });

  describe('updateUsername', () => {
    it('Should return an action with correct type', () => {
      const expected = 'UPDATE_USERNAME';
      const result = updateUsername('name');
      expect(result.type).toBe(expected);
    });
    it('Should return an action with the username', () => {
      const expected = 'name';
      const result = updateUsername(expected);
      expect(result.username).toBe(expected);
    });
    it('Should match snapshot', () => {
      const result = updateUsername('name');
      expect(result).toMatchSnapshot();
    });
  });
});
