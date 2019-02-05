const generateRoomID = () => {
  return Math.floor(Math.random() * 10 ** 7)
    .toString(36)
    .toUpperCase();
};

module.exports = {
  generateRoomID,
};
