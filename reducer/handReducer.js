import { actionTypes } from '../actions/handActions';

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.addCardToHand:
      return [...state, action.card];
    case actionTypes.discardCard:
      return state.filter(card => card.id === action.card.id);
    case actionTypes.discardHand:
      return initialState;
    case actionTypes.hideCard:
      return state.map(card => {
        if (card.id === action.card.id) {
          return { ...card, hidden: true };
        }
        return card;
      });
    case actionTypes.revealCard:
      return state.map(card => {
        if (card.id === action.card.id) {
          return { ...card, hidden: false };
        }
        return card;
      });
    default:
      return state;
  }
}
