let array = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  background(0);
}

function draw() {
  if (mouseIsPressed) {
    background(0);
  }
  noStroke();
  fill(frameCount % 360, 100, 100);
  translate(mouseX, mouseY);
  const brushWidth = 2;
  const bristleSeparation = .5;
  for (let xo = -brushWidth / 2; xo <= brushWidth / 2; xo += bristleSeparation) {
    ellipse(xo, 0, 1, 1);
  }
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }

  return false;

}
