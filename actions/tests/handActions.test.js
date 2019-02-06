import {
  actionTypes,
  addCardToHand,
  discardCard,
  discardHand,
  hideCard,
  revealCard,
} from '../handActions';

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
    };
    it('Should have the correct action type', () => {
      const expected = 'ADD_CARD_TO_HAND';
      const result = addCardToHand(mockCard);
      expect(result.type).toEqual(expected);
    });
    it('Should return an action with passed card', () => {
      const result = addCardToHand(mockCard);
      expect(result.card).toEqual(mockCard);
    });
    it('Should match snapshot', () => {
      expect(addCardToHand(mockCard)).toMatchSnapshot();
    });
  });

  describe('discardCard', () => {
    const mockCard = {
      id: 1,
      name: 'Ace of Spades',
    };
    it('Should have the correct action type', () => {
      const expected = 'DISCARD_CARD';
      const result = discardCard(mockCard);
      expect(result.type).toBe(expected);
    });
    it('Should return an action with passed card', () => {
      const result = discardCard(mockCard);
      expect(result.card).toEqual(mockCard);
    });
    it('Should match snapshot', () => {
      expect(discardCard(mockCard)).toMatchSnapshot();
    });
  });

  describe('discardHand', () => {
    it('Should return an action with correct type', () => {
      const expected = { type: 'DISCARD_HAND' };
      const result = discardHand();
      expect(result).toEqual(expected);
    });
  });

  describe('hideCard', () => {
    const mockCard = {
      id: 1,
      name: 'Ace of Spades',
    };
    it('Should return an action with correct type', () => {
      const expected = 'HIDE_CARD';
      const result = hideCard(mockCard);
      expect(result.type).toBe(expected);
    });
    it('Should return an action with passed card', () => {
      const result = hideCard(mockCard);
      expect(result.card).toEqual(mockCard);
    });
    it('Should match snapshot', () => {
      expect(hideCard(mockCard)).toMatchSnapshot();
    });
  });

  describe('revealCard', () => {
    const mockCard = {
      id: 1,
      name: 'Ace of Spades',
    };
    it('Should return an action with correct type', () => {
      const expected = 'REVEAL_CARD';
      const result = revealCard(mockCard);
      expect(result.type).toBe(expected);
    });
    it('Should return an action with passed card', () => {
      const result = revealCard(mockCard);
      expect(result.card).toEqual(mockCard);
    });
    it('Should match snapshot', () => {
      expect(revealCard(mockCard)).toMatchSnapshot();
    });
  });
});
