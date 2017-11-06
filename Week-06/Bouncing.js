var x = 5;
var y = 5;
var width = 5;
var height = 5;
var windowwidth = 1500;
var windowheight = 700;
var xspeed = 10;
var yspeed = 7;

function setup() {
  createCanvas(windowwidth, windowheight);
}

function draw() {
  background (13,142,41);
	fill (214,195,13)
  	ellipse (x, y, width, height);

 	 x = x + xspeed;
  	
  	 if (x > windowwidth | x < 5)  {
     	xspeed = -xspeed;
  	}

  	y = y + yspeed;

  	if (y > windowheight | y < 5) {
	 	  yspeed = -yspeed;
  	}

}
