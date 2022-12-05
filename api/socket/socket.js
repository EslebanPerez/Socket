
exports = module.exports = function(io){
  const adminNameSpace = io.of('/admin');

  adminNameSpace.on('connection', (socket) => {
    //console.log('a user connected');

    socket.on('join', (data) => {
      socket.join(data.room)
       adminNameSpace.in(data.room).emit('chat message', `New user joined the ${data.room} room`)
    })
  
    socket.on('disconnect', () => {
      console.log('user disconnected');
    });

    socket.on('chat message', (data) => {
      console.log('message: ' + data.msg );
      adminNameSpace.in(data.room).emit('chat message', data.msg);
    });
  });

}
