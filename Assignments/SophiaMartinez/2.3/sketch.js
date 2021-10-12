//where should I go for boba
let boba = [{
  name: "7leaves",
  sugar: "medium"
}, {
  name: "tenRen",
  sugar: "low"
}, {
  name: "85c",
  sugar: "high"
}, {
  name: "happyLemon",
  sugar: "high"
}, {
  name: "truedan",
  sugar: "low"
}, {
  name: "TPtea",
  sugar: "medium"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("Spin the roulette", 50, 50); //home screen
}

function draw() {

  if (animating == true) {
    ellipse(random(width), random(height), random(50, 200));
  }
}

function randomizer() {
  animating = false
  if (boba[0]) {
    // this displays random name and splices it out of array
    background(random(200, 255));
    randomIndex = int(random(boba.length));
    text(`${boba[randomIndex].name}'s sugar level is
    ${boba[randomIndex].sugar}`, 50, 50);
    // text(boba[randomIndex].name + "'s sugar level is " + boba[randomIndex].sugar, 50, 50);
    boba.splice(randomIndex, 1);
  } else {
    background(random(200, 255));
    text("No boba for you today >:(", 50, 50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer, 2000);


}
