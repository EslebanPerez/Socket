const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const socketIO = require("socket.io");
const io = socketIO(server);

const socketsFile = require("./socket/socket")(io);

//app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: "./" });
});

app.get("/executive", (req, res) => {
  res.sendFile("./public/executive.html", { root: "./" });
});

app.get("/engineer", (req, res) => {
  res.sendFile("./public/engineer.html", { root: "./" });
});

module.exports = { server };
