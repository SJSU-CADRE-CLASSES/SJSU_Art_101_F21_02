//Flowers

let flowers = [{
  name: "rose",
  color: "red"
}, {
  name: "lily",
  color: "pink"
}, {
  name: "orchid",
  color: "purple"
}, {
  name: "sunflower",
  color: "yellow"
}, {
  name: "daisy",
  color: "white"
}, {
name: "baby's breath",
color: "blue"
}];

let randomIndex;
let animating = false;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50);

}

function draw() {

  if(animating == true){

    ellipse(random(width), random(height), random(50,200));
  }
}

function randomizer(){
  animating = false;
  if (flowers[0]){
background(random(200, 255));
randomIndex = int(random(flowers.length));
text(`${flowers[randomIndex].name} petals
are ${flowers[randomIndex].color}`, 50, 50);
flowers.splice(randomIndex, 1);
} else {
  background(random(200, 255));
  text("nothing left!", 50, 50);
}
}

function mousePressed(){
  animating = true
  setTimeout(randomizer, 2000);

}
