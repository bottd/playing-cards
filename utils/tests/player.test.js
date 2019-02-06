import Player from '../player';

describe('Player class', () => {
  const name = 'John';
  const id = 2;
  let player;
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
  });
  describe('constructor', () => {
    it('Should default id to 1', () => {
      const player = new Player('John');
      expect(player.id).toBe(1);
    });
    it('Should default player name to "Player id"', () => {
      const player = new Player(undefined, 5);
      expect(player.name).toBe('Player 5');
    });
    it('Should set name to Player 1 when no arguments given', () => {
      const player = new Player();
      expect(player.name).toBe('Player 1');
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
      expect(player).toMatchSnapshot();
    });
  });

  describe('setId', () => {
    it('Should set a player id to given number', () => {
      player.setId(5);
      expect(player.id).toBe(5);
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
