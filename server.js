const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const next = require('next');
const utils = require('./utils');
const Game = require('./utils/Game');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const rooms = {
  ABC: new Game(false, 'John'),
};

rooms.ABC.dealCard(rooms.ABC.players[0].id);

io.on('connection', socket => {
  console.log('USER CONNECTED');
  socket.on('joinGame', function({ owner, username, roomID }) {
    socket.username = username;
    socket.owner = owner;
    if (owner) {
      const newRoom = utils.generateRoomID();
      rooms[newRoom] = new Game(false, username);
      socket.room = newRoom;
      socket.id = rooms[newRoom].players[0].id;
      socket.join(newRoom);
    } else {
      socket.room = roomID;
      socket.id = rooms[roomID].addPlayer(username);
      socket.join(roomID);
    }
    socket.join(socket.id);
    const gameData = rooms[socket.room].collectGameData(socket.id);
    io.to(socket.id).emit('joinGameData', gameData);
  });
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
