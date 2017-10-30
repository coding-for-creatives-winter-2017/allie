var x = 320;
var y = 240;
var width = 75;
var height = 75;



function setup() {
  createCanvas(640, 480);
}

function draw() {
  background(106,106,146);
  fill(135,184,153);
  rect(x, y, width, height);
  x = x + 1;
  y = y + 5;
}