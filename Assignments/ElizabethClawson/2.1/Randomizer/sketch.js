// [0,1,2,3...]
let plants = [{
  name: "Large",
  color: "Green"
}, {
  name: "Medium",
  color: "purple"
}, {
  name: "Small",
  texture: "fuzzy"
}];

let randomIndex;
let animating = false;
// let counter = 0;

function setup() {
  createCanvas(400, 400);
  textSize(32);
  text("click to randomize",50,50);
}

function draw() {
  if(animating == true){
    ellipse(random(width),random(height),random(50,200));
  }
}
// function changeBackground(){
//   if (counter <= 5){
//     counter++;
//     console.log(counter)
//   background(random(255),random(255), random(255));
//   setTimeout(changeBackground,1000);
// } else
// }
function randomizer(){
  animating = false;
  if (plants[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(plants.length))
    console.log(plants[randomIndex].name);
    text(plants[randomIndex].name, 50, 50);
    plants.splice(randomIndex, 1);
    console.log(plants);
  } else {
    background(random(255), random(255), random(255));
    text("nothing left!", 50, 50)
  }

}
function mousePressed() {
  animating = true
  setTimeout(randomizer, 2000);

}
