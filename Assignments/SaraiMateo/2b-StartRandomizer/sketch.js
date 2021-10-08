//Flowers
//let flowers = ["rose", "lily", "orchid", "sunflower", "daisy", "babysbreath"];
let flowers = [{
  name: "rose",
  color: "pink"
}, {
  name: "lily",
  color: "yellow"
}, {
  name: "orchid",
  color: "purple"
}, {
  name: "sunflower",
  color: "brown"
}, {
  name: "daisy",
  color: "white"
}, {
name: "babysbreath",
color: "blue"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {
}

function mousePressed(){
background(random(200, 255));
randomIndex = int(random(flowers.length));
text(flowers[randomIndex].name, 50, 50);
flowers.splice(randomIndex, 1);

}
