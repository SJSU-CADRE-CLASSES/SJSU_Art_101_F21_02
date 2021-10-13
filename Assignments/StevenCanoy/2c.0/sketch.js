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
let animating = false;
let workout = [];

function preload(){

   for (let i = 0; i<=9; i++){
     workout[i] = loadImage(`assets/workout_${i}.jpg`)
   }

}

function setup() {
  createCanvas(600, 600);
  background(200);
  textSize(32);
  imageMode(CENTER);
  

  text("click to randomize", 50, 50); 


}


function draw() {

  if(animating == true){
     image(workout[0], width/2, height/2);
  }
  
}

function randomizer(){
  animating = false;
  if (dogs[0]){
  
    //random name and splices
    background(random(200,255));
    randomIndex = int(random(dogs.length));
    text(`${dogs[randomIndex].name}'s favorite color is 
    ${dogs[randomIndex].color}`, 50, 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200,255));
    text("nothing left!", 50, 50);
  }
}


function mousePressed() {

  animating = true;
  setTimeout(randomizer, 2000);



 }