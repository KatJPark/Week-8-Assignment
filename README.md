SOCKETS - DRAWING EXAMPLE
-------------------------
## NOTE on the socket.io update:
* The videos associated with this code use an older version of socket.io --> v2.0.
* Now, we are using a later version socket.io --> v4.0
* What this means in terms of the code is that, we USED to use
`let io = require('socket.io').listen(server);`
as the way to set up the socket on the server side.
* From NOW, we will use this instead -->
`let io = require('socket.io');
io = new io.Server(server);`


### SETUP
* Run `npm install` to load the necessary node packages
* Open two broswer windows both pointing to `localhost:3000`

### NEXT STEPS
* Allow for changes of `ellipse` color
* Allow for changes of `ellipse` size


### LOGIC (Kat and Brian exercise)
Player 1, draws black, sees black + white
Player 2, draws white, sees white + black