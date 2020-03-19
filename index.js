const app = require('express')();
const http = require('http').createServer(app);
const { startApplication } = require('./utility.js');
const port = 8080;
const io = require('socket.io')(http);

startApplication(app, http, port);

io.on('connection', socket => {
  console.log('a user connected');
  // socket.broadcast.emit('chat message', 'you suck');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on('chat message', msg => {
    console.log(`Message: ${msg}`);
    io.emit('chat message', msg);
  });
});
