//Initialize the express 'app' object
let express = require('express');
let app = express();
app.use('/', express.static('public'));
const players = []

//Initialize the actual HTTP server
let http = require('http');
let server = http.createServer(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log("Server listening at port: " + port);
});

//Initialize socket.io
let io = require('socket.io');
io = new io.Server(server);

//Listen for individual clients/users to connect
io.sockets.on('connection', function(socket) {
    players.push(socket.id)
    console.log(players)
    // console.log("We have a new client: " + socket.id);

    //Listen for a message named 'data' from this client
    socket.on('data', function(data) {
        //Data can be numbers, strings, objects
        // console.log("Received: 'data' " + data);

        //Send the data to all clients, including this one
        //Set the name of the message to be 'data'
        // io.sockets.emit('data', data);
        // io.to(players[0]).emit("data", {mousePosition:data, color:0});
        // io.to(players[1]).emit("data", {mousePosition:data, color:255});
        
        if (socket.id == players[0]) {
            io.sockets.emit ("data", {mousePosition:data, color:0});
        } else {
            io.sockets.emit ("data", {mousePosition:data, color:255});
        }

        //Send the data to all other clients, not including this one
        // socket.broadcast.emit('data', data);

        //Send the data to just this client
        // socket.emit('data', data);
    });

    //Listen for this client to disconnect
    socket.on('disconnect', function() {
        console.log("A client has disconnected: " + socket.id);
        const index = players.indexOf (socket.id);
        players.splice (index, 1);
    });
});
