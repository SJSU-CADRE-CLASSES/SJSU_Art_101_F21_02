let excersizes = [];
let randomIndex;
let animating = false;
let workout = [];
let imageCounter = 0;
let startRandomizerButton;
let addMoreButton;
let cnv;
let nameInputs = [];
let firstTime = true;
let song = [];
let musicStarted;

/////////////// PRE LOAD ////////////////////////////

function preload(){

  //music
  for (let i = 0; i<=9; i++){
    song[i] = loadSound(`music/song_${i}.mp3`)
  }

  //Images

   for (let i = 0; i<=9; i++){
     workout[i] = loadImage(`assets/workout_${i}.jpg`)
   }

}


///////////////////// SETUP ///////////////////////////

function setup() {

 song.play();

  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");

  background(200, 40, 200);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill(25);
  imageMode(CENTER);
  frameRate(8);

  //First Page text
  push();
  textSize(15);
  fill(225);
  textAlign(CENTER);
  text("Type # of reps you wish to do and get sweaty!", width/2, height/2); 
  pop();



  //Music starts

  function musicStarted(){
    if(startRandomizerButton == True){
     firstTime = true;
    song.play();
    
    }
  }
  
  //Randomizer Button and style
  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(buttonPressed, musicStarted);

  //Add more Button and style
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);



  //Inputs
  for (let i = 0; i < 3; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

///////////////////// DRAW ////////////////////////////////

function draw() {

  if(musicStarted){
     
    
  }

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

////////////////////// Input Section ///////////////////////////


function addAnotherInput(){
  nameInputs.push(createInput());
  nameInputs[nameInputs.length -1].parent("#inputFields");

}


/////////////////////// Randomizer Button //////////////////////////

function randomizer(){
  animating = false;
  if (excersizes[0]){
  
    //Display random name and splice
    
    clear();
    randomIndex = int(random(excersizes.length));
   
    //Image With Name
    image(random(workout), width/2, height/2);

     //Name Text
     text(excersizes[randomIndex], width/2, height - 50);
    excersizes.splice(randomIndex, 1);
  } else {
    background(20, 40, 200);

    //Last Page
    push();
    fill(255);
    text("Water Break!", width/2, height/2);
    pop();
  }

}


function buttonPressed() {

  if (firstTime) {
  for (let i = 0; i < nameInputs.length; i++) {
    excersizes.push(nameInputs[i].value());
     }
    firstTime = false;
  }

  animating = true;
  setTimeout(randomizer, 2000);



 }