import Player from '../player';

describe('Player class', () => {
  let player, id;
  const name = 'John';
  const card = {
    id: 1,
    name: 'Ace of Spades',
    suite: 'spades',
    symbol: 'ace',
    value: '1',
    hidden: true,
  };
  const hand = [
    {
      id: 2,
      name: 'Two of Spades',
      suite: 'spades',
      symbol: 'two',
      value: '2',
      hidden: true,
    },
    {
      id: 3,
      name: 'Three of Spades',
      suite: 'spades',
      symbol: 'three',
      value: '3',
      hidden: true,
    },
  ];

  beforeEach(() => {
    player = new Player(name, id);
    id = player.id;
  });
  describe('constructor', () => {
    it('Should be a uuid', () => {
      expect(player.id.length).toBe(36);
    });
    it('Should default player name to "Player"', () => {
      const player = new Player();
      expect(player.name).toBe('Player');
    });
    it('Should have a name', () => {
      expect(player.name).toBe(name);
    });
    it('Should have an id', () => {
      expect(player.id).toBe(id);
    });
    it('Should start with an empty hand', () => {
      expect(player.hand).toEqual([]);
    });
    it('Should match snapshot', () => {
      player.id = 'UUID'
      expect(player).toMatchSnapshot();
    });
  });

  describe('addCard', () => {
    it('Should add a card to player hand', () => {
      const expected = [card];
      player.addCard(card);
      expect(player.hand).toEqual(expected);
    });
    it('Should work with multiple cards', () => {
      const expected = [...hand, card];
      player.hand = hand;
      player.addCard(card);
      expect(player.hand).toEqual(expected);
    });
  });

  describe('toggleCard', () => {
    it('Should toggle a card hidden value to false', () => {
      player.addCard(card);
      player.toggleCard(1);
      expect(player.hand[0].hidden).toBe(false);
    });
    it('Should toggle a card hidden value to true', () => {
      player.addCard(card);
      player.toggleCard(1);
      player.toggleCard(1);
      expect(player.hand[0].hidden).toBe(true);
    });
  });

  describe('discardCard', () => {
    it('Should discard a card from player hand', () => {
      player.hand = [card];
      player.discardCard(1);
      expect(player.hand).toEqual([]);
    });
    it('Should work with multiple cards', () => {
      player.hand = [...hand, card];
      player.discardCard(1);
      expect(player.hand).toEqual(hand);
    });
    it('Should return the discarded card', () => {
      player.hand = [card];
      const result = player.discardCard(1);
      expect(result).toEqual(card);
    });
  });
});
