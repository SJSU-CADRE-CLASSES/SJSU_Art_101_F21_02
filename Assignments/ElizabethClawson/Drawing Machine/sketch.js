let randomIndex;
let array = [];
let animating = false
// [0,1,2,3...]
let prompt = [{
  sketch: "Draw what makes you happiest in the world"
}, {
  sketch: "Draw what are you thinking about right now"
}, {
  sketch: "Draw one of your favorite childhood memories"
}, {
  sketch: "Draw something you did this week"
}, {
  sketch: "Draw a self-portrait"
}];

function setup() {
  createCanvas(displayWidth, displayHeight);
  background(20, 30, 40);

  button = select('#genButton')
  button.position(550, 200);
  button.class("randomizerButton");
}

function draw() {
  if (mouseIsPressed) {
    line(mouseX,mouseY,pmouseX, pmouseY);
    // array.push([mouseX, mouseY]);
  }
}

function doubleClicked() {
  animating = true
  setTimeout(randomizer, 500);
}

function randomizer() {
  animating = false;
  if (prompt[0]) {
    push();
    background(random(255), random(255), random(255));
    randomIndex = int(random(prompt.length))
    console.log(prompt[randomIndex].sketch);
    textSize(20);
    fill(255);
    noStroke();
    text(`${prompt[randomIndex].sketch}`, 80, 500);
    prompt.splice(randomIndex, 1);
    console.log(prompt);
  } else {
    background(random(255), random(255), random(255));
    noStroke();
    text("Freestyle", 230, 500)
    pop();
  }
}

function keyTyped() {
  console.log(`key ${key} is being typed`)
  if (key === 's') {
    saveCanvas('Untitled', 'png');
  } else if (key === 'd') {
    noFill();
    stroke(255);
    strokeWeight(5);
    beginShape();
    for (let i = 0; i < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
    endShape();
    }
    return false;
  }
}
