let dogs = [{
    name: "Steven",
    color: "doo doo brown"
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
let counter = 0;

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);

  text("click to randomize", 50, 50); 

  setTimeout(changeBackground, 1000);

  

}

function draw() {
  
}

function changeBackground(){
  if (counter <= 5){
    counter++;
  background(random(255),random(255),random(255));
  setTimeout(changeBackground, 1000);
} else {

  }
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