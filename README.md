# Workshop 7
Link: [https://whosaidthat-3636.github.io/Workshop-7/]

## Tasks
- Build a simulation of a real or imagined entity or environment.
- Experiment with random walks and/or particle systems in your sketch.

## Documentation
- For this workshop, I forked Emily Chin's Workshop 1 to integrate with this workshop
  * Maintained the background color, quad and arc

### 1) Setup
- Following the workshop video
- Star
  * to dislay 50 stars in the loop
  * randomized size and position
  * min size of 5, max size of 50
- Snow
  * to display 40 snow in the loop
  * randomized position
  * min size of 1, max size of 7 to better simulate the idea of snow
```
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
```

### 2) Class: Star
- I copied Emily's star shapes in her Workshop 1
- The values and sizes remain the same but altered it to fit in the class function
- I am aware the shape does not look the same but I'm not sure why that is
```
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
```

### 3) Class: Snow
- To further expand I added snow to the background behind the jittering stars
- Step because shape is moving downwards slowly
  * snow falls downward randomly between 0.5 and 1.5
  * have snow reappear from the top after code checks it has reached the bottom edge of the canvas
 - Adding transparency in fill
```
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
```

### 4) Applying for function to be executed
- I had some trouble with this in applying the executiong using the following code
```
starShape.move(); 
starShape.show(); 
walkers.step(); 
walkers.show(); 
```
- However, after sometime and trial and error I learned that
  * the code doesn't loop each all objects in the array therefore not working
```
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
```
