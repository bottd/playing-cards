import { actionTypes, resetOwner, setOwner } from '../ownerActions';

describe('Owner actions', () => {
  describe('action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('resetOwner', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'RESET_OWNER' };
      const result = resetOwner();
      expect(expected).toEqual(result);
    });
  });

  describe('setOwner', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'SET_OWNER' };
      const result = setOwner();
      expect(expected).toEqual(result);
    });
  });
});
