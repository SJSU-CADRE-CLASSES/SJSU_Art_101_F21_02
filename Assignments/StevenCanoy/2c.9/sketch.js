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
let imageCounter = 0;
let button;
let cnv;
let nameInputs = [];

function preload(){

   for (let i = 0; i<=9; i++){
     workout[i] = loadImage(`assets/workout_${i}.jpg`)
   }

}

function setup() {
  
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(20, 40, 200);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(25);
  imageMode(CENTER);
  frameRate(8);

  //First Page text
  push();
  fill(225);
  text("Welcome!", width/2, height/2); 
  pop();

  
  //Button and style
  //Old button
     //button = createButton("click to randomize");
  //New Button
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");


  //Inputs
  //nameInputs.push(createInput());
  //nameInput.parent("#inputFields");

}


function draw() {

  if(animating == true){
     clear();
     image(workout[imageCounter], width/2, height/2);

     if (imageCounter < workout.length - 1){
     imageCounter++;
     } else {
       imageCounter = 0;
     }
  }
  
}

function randomizer(){
  animating = false;
  if (dogs[0]){
  
    //Display random name and splice
    
    clear();
    randomIndex = int(random(dogs.length));
   
    //Image With Name
    image(random(workout), width/2, height/2);

     //Name Text
     text(dogs[randomIndex].name, width/2, height - 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(random(200,255));

    //Last Page
    text("nothing left!", width/2, height/2);
  }
}


function buttonPressed() {

  animating = true;
  setTimeout(randomizer, 2000);



 }