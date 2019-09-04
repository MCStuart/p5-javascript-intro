let x = 0;

function setup() {
  // put setup code here
  line(15, 25, 70, 90);
}

function draw() {
  // put drawing code here
  ellipse(x, height/2, 20, 20);
  x++;
}