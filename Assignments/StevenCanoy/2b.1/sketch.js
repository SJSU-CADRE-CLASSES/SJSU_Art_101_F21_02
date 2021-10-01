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
    color: "light colors"
}, {
    name: "Gishido",
    color: "midgray colors"
}];

let randomIndex;

function setup() {
  createCanvas(600, 600);
  background(random(255,255,255),random(255,255,255),random(255,255,255));
  textSize(32);

  text("click to randomize", 50, 50);

}

function draw() {
  
}

function mousePressed() {

  if (dogs[0]){
  
  //random name and splices
  background(random(200,255));
  randomIndex = int(random(dogs.length));
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);
} else {
  background(random(200,255));
  text("nothing left!", 50, 50);
}

}