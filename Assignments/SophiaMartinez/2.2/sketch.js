//where do I want to go get boba
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

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

}

function draw() {

}

function mousePressed(){

    // this displays random name and splices it out of array
  background(random(200, 255));
  randomIndex = int(random(boba.length));
  text(boba[randomIndex].name, 50, 50);
  boba.splice(randomIndex, 1);

}
