var socket;

function setup() {
  createCanvas(400, 400);
  background(51);
  socket = io.connect('https://git.heroku.com/ancient-citadel-81925.git');
  socket.on('mouse', newDrawing);
}

function newDrawing(data){
  noStroke();
  fill(200,0,100);
  ellipse(data.x, data.y, 10,10);
}



function mouseDragged(){
  console.log('Sending:' + mouseX + ',' + mouseY);
  var data = {
   x: mouseX,
   y: mouseY  
  }
  socket.emit('mouse', data); 

  noStroke();
  fill(200);
  ellipse(mouseX, mouseY, 10,10);
}


function draw() {
}
