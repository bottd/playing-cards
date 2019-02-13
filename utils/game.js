const { deck, deckWithJokers } = require('./cards');
const Player = require('./player');

class Game {
  constructor(withJokers = false, owner = 'Owner') {
    const player = new Player(owner);
    this.deck = withJokers ? deckWithJokers : deck;
    this.discard = [];
    this.owner = player.id;
    this.players = [player];
  }

  collectGameData(id) {
    const player = this.players.find(player => player.id === id);
    if (!player) {
      return;
    }
    const handData = this.players.reduce((acc, player) => {
      if (player.id === id) {
        acc.hand = player.hand;
      } else {
        acc[player.id] = {
          hand: player.hand,
          name: player.name,
        };
      }
      return acc;
    }, {});
    const cardCount = this.deck.length;
    const discardCount = this.discard.length;
    return { ...handData, cardCount, discardCount };
  }

  addPlayer(name) {
    const player = new Player(name);
    this.players = [...this.players, player];
    return player.id;
  }

  removePlayer(id) {
    this.players = this.players.filter(player => player.id !== id);
  }

  discardPlayerCard(playerId, cardId) {
    const player = this.players.find(player => player.id === playerId);
    const card = player.discardCard(cardId);
    this.discard = [...this.discard, card];
  }

  dealCard(playerId) {
    const card = this.deck.pop();
    const player = this.players.find(player => player.id === playerId);
    player.addCard(card);
  }

  shuffleCards() {
    const cardCount = this.deck.length;
    for (let i = cardCount - 1; i >= 0; i -= 1) {
      const randInd = Math.floor(Math.random() * cardCount);
      const swap = this.deck[i];
      this.deck[i] = this.deck[randInd];
      this.deck[randInd] = swap;
    }
  }

  shuffleInDiscarded() {
    if (this.discard.length) {
      this.deck = [...this.discard, ...this.deck];
      this.discard = [];
    }
    this.shuffleCards();
  }
}

module.exports = Game;
