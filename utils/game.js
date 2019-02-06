import { deck, deckWithJokers } from './cards';
import Player from './player';

export default class Game {
  constructor(withJokers, player) {
    this.deck = withJokers ? deckWithJokers : deck;
    this.discard = [];
    this.players = [player];
  }

  addPlayer(name) {
    const id = this.players.length + 1;
    const player = new Player(name, id);
    this.players = [...this.players, player];
  }

  setPlayerIds() {
    this.players.forEach((player, ind) => player.setId(ind + 1));
  }

  discardPlayerCard(playerId, cardId) {
    const card = this.players[playerId].discardCard(cardId);
    this.discard = [...this.discard, card];
  }

  dealCard(playerId) {
    const card = this.deck.pop();
    this.players[playerId].addCard(card);
  }

  shuffleCards() {
    let shuffleCount = this.deck.length;
    while (shuffleCount > 0) {
      const randInd = Math.floor(Math.random() * currentIndex);
      const temp = this.deck[randInd];
      this.deck[randInd] = this.deck[shuffleCount];
      this.deck[shuffleCount] = temp;
      shuffleCount -= 1;
    }
  }

  shuffleInDiscarded() {
    this.deck = [...this.discarded, ...this.deck];
    this.discarded = [];
    this.shuffleCards();
  }
}
