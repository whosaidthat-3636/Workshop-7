let starShape = [];
let walkers = [];

function setup() {
  createCanvas(400, 400);

  for (let x = 0; x < 50; x++) {
    let rx = random(20, width - 20);
    let ry = random(20, height - 20);
    let rr = random(5, 50); 
    starShape[x] = new Star(rx, ry, rr);
  }

  for (let i = 0; i < 40; i++) {
    let x = random(0, width);
    let y = random(0, height);
    this.r = random(1, 7); 
    walkers[i] = new Snow(x, y);
  }
}

function draw() {
  background(44, 54, 66);

  for (let i = 0; i < starShape.length; i++) {
    starShape[i].move();
    starShape[i].show();
  }

  for (let i = 0; i < walkers.length; i++) {
    walkers[i].step();
    walkers[i].show();
  }
}

class Star {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-0.3, 0.3); 
    this.y += random(-0.3, 0.3);
  }

  show() {
    let size = this.r;

    fill(242, 242, 228);
    noStroke();
    quad(this.x, this.y - size, this.x - size / 2, this.y, this.x, this.y + size, this.x + size / 2, this.y);

    fill(44, 54, 66);
    stroke(44, 54, 66);
    arc(this.x + size / 2, this.y - size, size, size * 2, PI, 3 * PI / 2, CHORD);
    arc(this.x - size / 2, this.y - size, size, size * 2, PI + PI, 3 * PI / 2 + PI, CHORD);
    arc(this.x + size / 2, this.y + size, size, size * 2, PI - PI / 2, 3 * PI / 2 - PI / 2, CHORD);
    arc(this.x - size / 2, this.y + size, size, size * 2, PI + PI / 2, 3 * PI / 2 + PI / 2, CHORD);
  }
}

class Snow {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = r
  }

  step() {
    this.y += random(0.5, 1.5); 
    if (this.y > height) {
      this.y = 0; 
    }
  }

  show() {
    fill(255, 255, 255, 150); 
    noStroke();
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }
}
