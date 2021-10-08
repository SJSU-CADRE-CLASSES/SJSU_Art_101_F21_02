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
let counter=0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("Spin the roulette", 50, 50); //home screen

  setTimeout(changeBackground, 1000);
}

function draw() {

}

function changeBackground(){
  if (counter <==5){
    counter++;
    console.log(counter)
  background(random(255), random(255), random(255));
  setTimeout(changeBackground, 1000);
} else {
  
}
}

function mousePressed(){

if (boba[0]){
    // this displays random name and splices it out of array
  background(random(200, 255));
  randomIndex = int(random(boba.length));
  text(boba[randomIndex].name, 50, 50);
  boba.splice(randomIndex, 1);
}else {
  background(random(200, 255));
  text("No boba for you today >:( (Roll next time?)", 50, 50)
}
}
