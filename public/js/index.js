
/*var socket = io.connect('http://localhost:3000', {
  forceNew: true,
}); */
//var socket = io();

var socket = io('/admin')

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

const room = 'executive'

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', { msg: input.value, room });
    input.value = '';
  }
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  console.log(msg);
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

socket.on ('connect', () => {
  socket.emit('join', { room })
})