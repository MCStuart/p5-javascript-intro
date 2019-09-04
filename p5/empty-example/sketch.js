let x = 0;

function setup() {
  // put setup code here
  let myCanvas = createCanvas(600, 400);
  myCanvas.parent('myContainer');
}

function draw() {
  // put drawing code here
  ellipse(x, height/2, 20, 20);
  x++;
}