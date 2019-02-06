import v1 from 'uuid/v1';

export default class Player {
  constructor(name) {
    this.name = name || 'Player';
    this.id = v1();
    this.hand = [];
  }

  addCard(card) {
    this.hand = [...this.hand, card];
  }

  toggleCard(cardId) {
    this.hand = this.hand.map(card => {
      if (cardId === card.id) {
        return { ...card, hidden: !card.hidden };
      }
      return card;
    });
  }

  discardCard(cardId) {
    const card = this.hand.find(card => cardId === card.id);
    this.hand = this.hand.filter(card => cardId !== card.id);
    return card;
  }
}
