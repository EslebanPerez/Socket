const express = require("express");
const app = express();

const http = require('http');
const server = http.createServer(app);

const socketIO= require("socket.io");
const io =  socketIO(server);

const socketsFile = require('./socket/socket')(io);

app.use(express.static('public'));


module.exports = { server };

