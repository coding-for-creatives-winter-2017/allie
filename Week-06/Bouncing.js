var ex = 1;
var ey = 1;
var ew = 40;
var eh = 40;
var rx = 1199;
var ry = 699;
var rw = 40;
var rh = 40;
var windowwidth = 1450;
var windowheight = 700;
var exspeed = 10;
var eyspeed = 7;
var rxspeed = 9;
var ryspeed = 6;

function setup() {
  createCanvas(windowwidth, windowheight);
}

function draw() {
  background (141,250,178);
  	noStroke ();
	fill (106,187,133)
  	ellipse (ex, ey, ew, eh);
  	fill (35,62,44)
  	rect (rx,ry,rw,rh);

 	 ex = ex + exspeed;
  	 rx = rx - rxspeed;

  	 if (ex > windowwidth | ex < 1)  {
     	exspeed = -exspeed;
  	}

  	 if (rx > windowwidth | rx < 1)  {
     	rxspeed = -rxspeed;
  	}

  	ey = ey + eyspeed;
	ry = ry - ryspeed;

  	if (ey > windowheight | ey < 1) {
	 	  eyspeed = -eyspeed;
  	}

	if (ry > windowheight | ry < 1) {
		 	  ryspeed = -ryspeed;
	}

}
