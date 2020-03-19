const app = require('express')();
const http = require('http').createServer(app);
const { startApplication } = require('./utility.js');
const port = 8080;
const io = require('socket.io')(http);

startApplication(app, http, port);

io.on('connection', socket => {
  console.log('utente connesso');
  socket.broadcast.emit('chat message', 'Utente connesso');

  socket.on('disconnect', () => {
    console.log('utente disconnesso');
  });

  socket.on('chat message', msg => {
    console.log('messaggio', msg);
    io.emit('chat message', msg);
  });

  socket.on('is writing', user => {
    socket.broadcast.emit('is writing', user);
  });

  socket.on('end writing', () => {
    console.log('ha smesso di scrivere');
    socket.broadcast.emit('end writing');
  });
});
