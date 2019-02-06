import { actionTypes, connectToGame, disconnectFromGame } from '../connectionStatusActions';

describe('Connection status actions', () => {
  describe('action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('connectToGame', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'CONNECT_TO_GAME' };
      const result = connectToGame();
      expect(result).toEqual(expected);
    });
  });

  describe('disconnectFromGame', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'DISCONNECT_FROM_GAME' };
      const result = disconnectFromGame();
      expect(result).toEqual(expected);
    });
  });
});
