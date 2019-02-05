import { actionTypes, addCardToHand, discardCard, discardHand, hideCard, revealCard } from '../handActions';

describe('Hand actions', () => {
  describe('Action types', () => {
    it('Should match snapshot', () => {
      expect(actionTypes).toMatchSnapshot();
    });
  });

  describe('addCardToHand', () => {
    const mockCard = {
      id: 1,
      name: 'Ace of Spades',
    }
    it('Should have the correct action type', () => {
      const expected = 'ADD_CARD_TO_HAND';
      const result = addCardToHand(mockCard);
      expect(result.type).toEqual(expected);
    });
    it('Should match snapshot', () => {
      expect(addCardToHand(mockCard)).toMatchSnapshot();
    });
  });
});
