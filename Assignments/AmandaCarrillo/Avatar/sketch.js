let mic;
let micLevel;
let sketchStarted = false;

function setup() {
  createCanvas(400, 400);
  background(222, 165, 164);
  noStroke();
  angleMode(DEGREES);

  createButton("Start").mousePressed(startSketch);
}

function startSketch(){
  mic = new p5.AudioIn();
  mic.start();

  sketchStarted = true;
}

function draw() {
  if(sketchStarted){
    var xColor = map(mouseX, 0, 400, 0, 255);
    var yColor = map(mouseY, 0, 400, 0, 255);
    drawEars();
    drawHead();
    drawEyes();
    drawBody();
    fill(200, xColor, yColor);
    ellipse(mouseX, mouseY, 25, 25);

    fill(0);
    ellipse(width * 0.5, height * 0.575, 20, mic.getLevel() * 400);
  }
}
// .

function drawEars() {
  fill(0);
  //left ear
  ellipse(width * 0.4, height * 0.35, 60, 60);
  //right ear
  ellipse(width * 0.6, height * 0.35, 60, 60);
}

function drawHead() {
  fill(0);
  noStroke();
  ellipse(width * 0.5, height * 0.85, 200, 250);
  //head
  push();
  fill(255, 250, 240);
  ellipse(width * 0.5, height * 0.5, 140, 140);
  pop();

  //Nose
  ellipse(width * 0.5, height * 0.5, 20, 10);
  fill(255, 250, 240);
  ellipse(width * 0.51, height * 0.4975, 5, 3);
}

function drawEyes() {
  //left eye
  push();
  fill(0);
  translate(width * 0.425, height * 0.45);
  rotate(330);
  fill(0);
  ellipse(width * 0, height * 0, 50, 40);
  pop();

  //sclera
  fill(255, 250, 240);
  ellipse(width * 0.425, height * 0.45, 25, 25);

  //pupil
  push();
  fill(61, 43, 31);
  ellipse(width * 0.43, height * 0.445, 18, 18);
  pop();

  push();
  fill(0);
  ellipse(width * 0.43, height * 0.445, 10, 10);
  pop();

  push();
  fill(255, 250, 240);
  ellipse(width * 0.435, height * 0.44, 5, 5);
  pop();

  //right eye
  fill(0);
  push();
  translate(width * 0.575, height * 0.45);
  rotate(30);
  fill(0);
  ellipse(width * 0, height * 0, 50, 40);
  pop();
  //sclera
  fill(255, 250, 240);
  ellipse(width * 0.575, height * 0.45, 25, 25);

  //pupil
  fill(61, 43, 31);
  ellipse(width * 0.58, height * 0.445, 18, 18);

  fill(0);
  ellipse(width * 0.58, height * 0.445, 10, 10);

  fill(0);
  ellipse(width * 0.58, height * 0.445, 10, 10);

  fill(255, 250, 240);
  ellipse(width * 0.585, height * 0.44, 5, 5);
}

function drawBody() {
  //stomach
  fill(255, 250, 240);
  ellipse(width * 0.5, height * 0.875, 180, 150);
  fill(0);
  ellipse(width * 0.4, height * 1, 70, 50);
  ellipse(width * 0.6, height * 1, 70, 50);

  push();
  translate(width * 0.27, height * 0.73);
  rotate(30);
  ellipse(width * 0, height * 0, 40, 100);
  pop();

  push();
  translate(width * 0.73, height * 0.73);
  rotate(330);
  ellipse(width * 0, height * 0, 40, 100);
  pop();
}
