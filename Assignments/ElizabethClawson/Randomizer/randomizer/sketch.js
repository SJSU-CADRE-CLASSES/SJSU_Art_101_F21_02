// [0,1,2,3...]
let bikes = [{
  name: "Road bike",
  props: "no travel. Road only.",
}, {
  name: "Gravel bike",
  props: ` No travel.
           Handles road and dirt.`
}, {
  name: "Trail bike",
  props: ` Low travel.
           Made for low impact riding.`
}, {
  name: "Enduro bike",
  props: ` Mid-range travel.
           All mountain.`
}, {
  name: "Downhill bike",
  props: ` High travel.
           Made for parks.`
}, {
  name: "eBike",
  props: ` Varies in travel.
           Made for cheaters.`
}];

let randomIndex;
let animating = false;
let bike = [];

function preLoad(){
    for (let i=0; i<=6; i++){
      trolls[i] = loadImage(`Randomizer/bike_ ${i}.jpeg`)
    }
}
// let counter = 0;

function setup() {
  createCanvas(800, 400);
  textSize(30);
  text("Click to find your type of bike",250,200);
  console.log(bike);
}

function draw() {
  if(animating == true){
    fill(random(255), random(255), random(255))
    rect(random(width),random(height),random(50,200));
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
  if (bikes[0]) {
    background(random(255), random(255), random(255));
    randomIndex = int(random(bikes.length))
    console.log(bikes[randomIndex].name);
    text(`${bikes[randomIndex].name}:
          ${bikes[randomIndex].props}`, 200, 190);
    bikes.splice(randomIndex, 1);
    console.log(bikes);
  } else {
    background(random(255), random(255), random(255));
    textSize(150)
    text("ALL DONE!", 20, 250)
  }

}
function mousePressed() {
  animating = true
  setTimeout(randomizer, 2000);

}
