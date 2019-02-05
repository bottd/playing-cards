export const actionTypes = {
  addCardToHand: 'ADD_CARD_TO_HAND',
  discardCard: 'DISCARD_CARD',
  discardHand: 'DISCARD_HAND',
  hideCard: 'HIDE_CARD',
  revealCard: 'REVEAL_CARD',
};

export const addCardToHand = card => ({
  type: actionTypes.addCardToHand,
  card,
});

export const discardCard = card => ({
  type: actionTypes.discardCard,
  card,
});

export const discardHand = () => ({
  type: actionTypes.discardHand,
});

export const hideCard = () => ({
  type: actionTypes.hideCard,
});

export const revealCard = card => ({
  type: actionTypes.revealCard,
  card,
});
