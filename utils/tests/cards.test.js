const cards = require('../cards');

describe('Cards', () => {
  describe('Deck', () => {
    it('Should have a 52 cards', () => {
      expect(cards.deck.length).toBe(52);
    });
    it('Should match snapshot', () => {
      expect(cards.deck).toMatchSnapshot();
    });
  });

  describe('Joker', () => {
    it('Should match snapshot', () => {
      expect(cards.joker).toMatchSnapshot();
    });
  });

  describe('Deck with Jokers', () => {
    it('Should have 54 cards', () => {
      expect(cards.deckWithJokers.length).toBe(54);
    });
    it('Should match snapshot', () => {
      expect(cards.deckWithJokers).toMatchSnapshot();
    });
  });
});
