var exone = 1;
var eyone = 1;
var ewone = 70;
var ehone = 70;
var extwo = 1199;
var eytwo = 699;
var ewtwo = 100;
var ehtwo = 100;
var windowwidth = 1450;
var windowheight = 700;
var exonespeed = 3;
var eyonespeed = 1;
var extwospeed = 3;
var eytwospeed = 1;

function setup() {
  createCanvas(windowwidth, windowheight);
}



function draw() {
  background (235,181,187);
  	noStroke ();
	fill (224,209,210)
  	ellipse (exone, eyone, ewone, ehone);
  	fill (213,79,140)
  	ellipse (extwo,eytwo,ewtwo,ehtwo);

 	 exone = exone + exonespeed;
  	 extwo = extwo - extwospeed;

  	 if (exone > windowwidth | exone < 1)  {
     	exonespeed = -exonespeed;
  	}

  	 if (extwo > windowwidth | extwo < 1)  {
     	extwospeed = -extwospeed;
  	}

  	eyone = eyone + eyonespeed;
	eytwo = eytwo - eytwospeed;

  	if (eyone > windowheight | eyone < 1) {
	 	  eyonespeed = -eyonespeed;
  	}

	if (eytwo > windowheight | eytwo < 1) {
		 	  eytwospeed = -eytwospeed;
	}

}
