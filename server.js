const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const next = require('next');
const utils = require('./utils');

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on('connection', socket => {
  console.log('USER CONNECTED');
});

nextApp.prepare().then(() => {
  //app.get('/messages/:chat', (req, res) => {
  //res.json(messages[req.params.chat]);
  //});
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
