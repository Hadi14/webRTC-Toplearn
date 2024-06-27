const express = require('express');
const http = require('http');

const PORT = process.env.PORT || 3000;

const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
})

let connectedPeers = [];
let connectedPeersStrangers = [];

io.on('connection', (socket) => {
    console.log("AAAAAAAAAAAAAAAAAA");
    console.log("SERVER:user connected to socket IO ..." + socket.id);
    connectedPeers.push(socket.id);
    console.log(connectedPeers);


    socket.on("disconnect", () => {
        console.log('user disconnected');
        const newConnected = connectedPeers.filter((socketpeer) => {
            return socketpeer !== socket.id;
        })
        connectedPeers = newConnected;
        console.log(connectedPeers);
    })
})









server.listen(PORT, () => {
    console.log('server is running ..');
})