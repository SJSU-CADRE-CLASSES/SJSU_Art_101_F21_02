let dogs = [];

let randomIndex;
let animating = false;
let workout = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;

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

  
  //Randomizer Button and style
  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(buttonPressed);

  //Add more Button and style
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);



  //Inputs
  for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
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

function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");

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
     text(dogs[randomIndex], width/2, height - 50);
    dogs.splice(randomIndex, 1);
  } else {
    background(20, 40, 200);

    //Last Page
    text("nothing left!", width/2, height/2);
  }
}


function buttonPressed() {

  if (firstTime) {
  for (let i = 0; i < nameInputs.length; i++) {
    dogs.push(nameInputs[i].value());
     }
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 2000);



 }