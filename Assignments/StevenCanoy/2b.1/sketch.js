let dogs = [{
    name: "Steven",
    color: "skin tones"
}, {
    name: "Tyson",
    color: "cat eyes"
}, {
    name: "Kylo",
    color: "dark colors"
}, {
    name: "Rey",
    color: "lights colors"
}, {
    name: "Gishido",
    color: "midgray colors"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(200);

}

function draw() {
  
}

function mousePressed() {
  
  //random name and splices
  background(random(200,255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);

}