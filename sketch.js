function setup() {
  createCanvas(400, 400);
  frameRate(5);
}

function draw() {
  // star(100,100,50);
  background(44, 54, 66);
  for(x = 0; x < 25; x++){
  star(random(0,width), random(0,height), random(0,25));
  }
  cursor(CROSS);
}

function star(x, y, size){
  //draw star
  fill(242, 242, 228);
  noStroke();
  quad(x, y-size, x-size/2, y , x, y+size, x+size/2, y);
  fill(44, 54, 66);
  stroke(44, 54, 66);
  arc(x+size/2, y+size, size, size*2, PI, 3*PI/2, CHORD);
  
  arc(x-size/2, y-size, size, size*2, PI+PI, 3*PI/2 +PI, CHORD);
  
  arc(x+size/2, y-size, size, size*2,  PI-PI/2, 3*PI/2 -PI/2, CHORD);
  
  arc(x-size/2, y+size, size, size*2,  PI+PI/2, 3*PI/2 +PI/2, CHORD);
}






















