let dogs = [{name: "max", color:"white"}, {name: "jordan", color: "brown"},{name:"slinky", color:"green"}, {name: "buddha", color:"blue" }]

let randomIndex;
// let randompics = [];
let animating = false;
// function preload(){

//   for (let i = 0; i <=4; i++){
//
// randompics[i] = loadImage("assests/random_" + i + ".JPG")

  }
}

function setup() {
  createCanvas(400, 400);
  background(225);
  textSize(32);

text("click to randomize",50,50);
// console.log(randompics);

}

function draw() {

if(animating == true){
  ellipse(random(width) random (height), random(50,200));
  // image(trolls [0],0,0);
}

}

funtion randomizer (){
  if (dogs[0]){

  background(random(200,255));
  randomIndex = int(random(dogs.length))
  text(dogs[randomIndex].name, 50, 50);
  dogs.splice(randomIndex, 1);
  }
  else {
    background(random(200,255));
    text("nothing left!",50,50);
  }
}

function mousePressed() {
  animating = true;
  setTimeout(randomizer,2000);


}
