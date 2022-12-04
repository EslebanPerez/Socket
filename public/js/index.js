
var socket = io.connect('http://localhost:3000', {
  forceNew: true,
}); 
//var socket = io();

var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
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