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
const rooms = {};

io.on('connection', socket => {
  console.log('USER CONNECTED');
  socket.on('joinGame', function({ owner, username, roomID}) {
    console.log('ARGS', username, owner, roomID);
    socket.username = username;
    socket.owner = owner;
    if ( owner ) {
      const newRoom = utils.generateRoomID();
      socket.room = newRoom
      rooms[newRoom] = new Game(false, username);
      console.log(newRoom);
      socket.join(newRoom);
      console.log(rooms[newRoom].players);
    } else {
      socket.room = roomID;
      rooms[roomID].addPlayer(username);
      socket.join(roomID);
      console.log(rooms[roomID].players);
    }
  })
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res)
  })
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
