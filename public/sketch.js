//Open and connect socket
//Built in connection line
let socket = io();

//Listen for confirmation of connection
socket.on('connect', function() {
  console.log("Connected");
});

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  //Listen for messages named 'data' from the server
  //.on means we are listening for something, and then we are expecting information so we can do something with it
  socket.on('data', function(obj) {
    // console.log(obj);
    drawPos(obj);
  });
}

function mouseMoved() {
  //Grab mouse position
  let mouseKat = { x: mouseX, y: mouseY };

  // obj = {mousePosition:{x:mouseX, y:mouseY}, color:0}


  //Send mouse position object to the server
  socket.emit('data', mouseKat);

  //Draw yourself? or Wait for server?
  // fill(0);
  // ellipse(mouseX, mouseY 10, 10);
}

//Expects an object with a and y properties
function drawPos(pos) {
  console.log(pos)
  fill(pos.color);
  noStroke();
  ellipse(pos.mousePosition.x, pos.mousePosition.y, 30, 30);
}

