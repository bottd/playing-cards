export default class Player {
  constructor(name, id = 1) {
    this.name = name || `Player ${id}`;
    this.id = id;
    this.hand = [];
  }

  setId(num) {
    this.id = num;
  }

  addCard(card) {
    this.hand = [...hand, card];
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
    this.hand = this.hand.filter(card => !cardId === card.id);
    return card;
  }
}
