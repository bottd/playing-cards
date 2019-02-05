const cards = require('./cards');
const utils = require('./utils');

module.exports = {
  deck: cards.deck,
  deckWithJokers: cards.deckWithJokers,
  generateRoomID: utils.generateRoomID,
};
