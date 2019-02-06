import Game from '../game';
import { deck, deckWithJokers } from '../cards';

describe('Game class', () => {
  let game;
  beforeEach(() => {
    game = new Game(true, 'John');
  });
  describe('Contructor', () => {
    it('Should create a deck with jokers', () => {
      expect(game.deck).toEqual(deckWithJokers);
    });
    it('Should create a deck without jokers', () => {
      game = new Game(false, 'John');
      expect(game.deck).toEqual(deck);
    });
    it('Should default to a deck without jokers', () => {
      game = new Game(undefined, 'John');
      expect(game.deck).toEqual(deck);
    });
    it('Should default owner name to "Owner"', () => {
      game = new Game();
      expect(game.players[0].name).toBe('Owner');
    });
    it('Should match snapshot', () => {
      game.owner = 'UUID';
      game.players[0].id = 'UUID';
      expect(game).toMatchSnapshot();
    });
  });

  describe('addPlayer', () => {
    it('Should add a player to games players with uuid', () => {
      const id = game.addPlayer('Sam');
      expect(game.players.length).toBe(2);
      expect(game.players[1].id).toBe(id);
      expect(game.players[1].name).toBe('Sam');
    });
    it('Should be able to add many players', () => {
      game.addPlayer('Sam');
      game.addPlayer('Joe');
      game.addPlayer('Tim');
      expect(game.players.length).toBe(4);
    });
  });

  describe('removePlayer', () => {
    it('Should remove a player from players array', () => {
      const id = game.addPlayer('Sam');
      game.removePlayer(id);
      expect(game.players.length).toBe(1);
    });
  });

  describe('discardPlayerCard', () => {
    it('Should move a card from a player hand to the game discard', () => {
      const card = {
        id: 1,
        name: 'Ace of Spades',
        suite: 'spades',
        symbol: 'ace',
        value: '1',
        hidden: true,
      };
      game.players[0].hand = [card];
      game.discardPlayerCard(game.owner, 1);
      expect(game.players[0].hand).toEqual([]);
      expect(game.discard).toEqual([card]);
    });
  });

  describe('dealCard', () => {
    it('Should take the last card in the deck and give it to player', () => {
      const card = game.deck[game.deck.length - 1];
      game.dealCard(game.owner);
      expect(game.players[0].hand).toEqual([card]);
      expect(game.deck.length).toBe(53);
    });
  });

  describe('shuffle cards', () => {
    it('Should randomize the card order', () => {
      const deck = [...game.deck];
      game.shuffleCards();
      expect(game.deck).not.toEqual(deck);
      expect(game.deck.length).toBe(deck.length);
    });
  });
  describe('shuffleInDiscarded', () => {
    it('Should empty out discarded cards and add them to deck', () => {
      const initialLength = game.deck.length;
      game.discard = [
        {
          name: 'Joker',
          suite: 'none',
          symbol: 'joker',
          value: 0,
          hidden: true,
        },
      ];
      game.shuffleInDiscarded();
      expect(game.deck.length).toBe(initialLength + 1);
      expect(game.discard.length).toBe(0);
    });

    it('Should call shuffleCards', () => {
      const spy = spyOn(game, 'shuffleCards');
      game.shuffleInDiscarded();
      expect(spy).toHaveBeenCalled();
    });
  });
});
