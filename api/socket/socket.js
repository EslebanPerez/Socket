
exports = module.exports = function(io){
  const adminNameSpace = io.of('/admin');

  adminNameSpace.on('connection', (socket) => {
    console.log('a user connected');
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      adminNameSpace.emit('chat message', msg);
    });
  });

}
