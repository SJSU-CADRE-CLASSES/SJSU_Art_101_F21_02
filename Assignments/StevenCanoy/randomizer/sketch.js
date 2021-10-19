let squareSize;
let lineWidth;


/////////////////SETUP////////////////////////

function setup() {
  createCanvas(600, 600);
  
   //Background
  background(22);
  
  //FrameRATE
  frameRate(2);
  
  //********* the setup will Draw random image once  
  // //Random Square size
  // squareSize = random(50,100);
  
  // //Random Line Size
  // lineWidth = random(1,50);
  
  
}

///////////////////DRAW/////////////////////////


function draw() {
  
  //Background
  background(22);
  
  //Square Build
  push();
  rectMode(CENTER);
  strokeWeight(lineWidth);
  stroke(0, 0, 225);
  fill(0, 255, 0);
  square(width/2, height/2, squareSize);
  pop();
  
    //Random Square size **** Calling in the draw function will continuously draw random square***
  squareSize = random(50,100);
  
   //Random Line Size**** Calling in the draw function will continuously draw random line***
  lineWidth = random(1,50);
  
}