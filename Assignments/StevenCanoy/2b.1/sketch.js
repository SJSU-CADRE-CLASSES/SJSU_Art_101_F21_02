let dogs = [{
    name: "Steven",
    color: "Red"
}, {
    name: "Tyson",
    color: "green"
}, {
    name: "Kylo",
    color: "Grey"
}, {
    name: "Rey",
    color: "white"
}, {
    name: "Gishido",
    color: "Brown"
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
  background(randome(200,255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);

}