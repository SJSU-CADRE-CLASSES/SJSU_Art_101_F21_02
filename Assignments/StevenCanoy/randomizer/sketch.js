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
var song0, song1, song2, song3, song4, song5, song6, song7, song8, song9; 




/////////////// PRE LOAD ////////////////////////////

function preload(){

   //music
   song0 = loadSound("music/song_0.mp3");
   song1 = loadSound("music/song_1.mp3");
   song2 = loadSound("music/song_2.mp3");
   song3 = loadSound("music/song_3.mp3");
   song4 = loadSound("music/song_4.mp3");
   song5 = loadSound("music/song_5.mp3");
   song6 = loadSound("music/song_6.mp3");
   song7 = loadSound("music/song_7.mp3");
   song8 = loadSound("music/song_8.mp3");
   song9 = loadSound("music/song_9.mp3");


   for (let i = 0; i<=9; i++){
     workout[i] = loadImage(`assets/workout_${i}.jpg`)
   }

}


///////////////////// SETUP ///////////////////////////

function setup() {
  
  cnv = createCanvas(600, 600);
  cnv.parent("#canvasDiv");
  
  background(200, 40, 200);
  textSize(36);
  textFont('Courier new');
  textAlign(CENTER);
  textStyle(BOLD);
  fill("#3FDCEB");
  imageMode(CENTER);
  frameRate(8);

  //First Page text
  push();
  textSize(30);
  fill(225);
  textAlign(CENTER);
  push();
  fill("#EBE16E");
  text("There are 10 random excersizes.", width/2, 100);
  text("Enter number of reps", width/2, 150);
  text("you wish to do.", width/2, 200);
  pop();
  text("Press these keys to play music", width/2, height/2); 
  text("a,s,d,f,g,h,j,k,l,z", width/2, 350);
  text("Press spacebar to STOP music", width/2, 400);
  pop();

  
  //Randomizer Button and style
  startRandomizerButton = select('#randButton')
  startRandomizerButton.mousePressed(buttonPressed);
 
  //Add more Button and style
  addMoreButton = select('#addMoreButton')
  addMoreButton.mousePressed(addAnotherInput);



  //Inputs
  for (let i = 0; i < 10; i++) {
  nameInputs.push(createInput());
  nameInputs[nameInputs.length - 1].parent("#inputFields");
  }
}

///////////////////// DRAW ////////////////////////////////

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

///////////////////// SONG SELECTION ///////////////////////////

function keyTyped() {
  if (key == 'a') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song0.play();
  }
  if (key == 's') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song1.play();
  }
  if (key == 'd') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song2.play();
  }
  if (key == 'f') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song3.play();
  }
  if (key == 'g') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song4.play();
  }
  if (key == 'h') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song5.play();
  }
  if (key == 'j') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song6.play();
  }
  if (key == 'k') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song7.play();
  }
  if (key == 'l') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song8.play();
  }
  if (key == 'z') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
    song9.play();
  }
  if (key == ' ') {
    song0.stop();
    song1.stop();
    song2.stop();
    song3.stop();
    song4.stop();
    song5.stop();
    song6.stop();
    song7.stop();
    song8.stop();
    song9.stop();
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