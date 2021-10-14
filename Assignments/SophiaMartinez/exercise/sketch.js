let pics = []; //CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numPics = 3;


//LOAD IMAGES BEFORE THE PROGRAM RUNS
function preload(){

  let pic1 = loadImage('fruit_1.jpeg');
  let pic2 = loadImage('fruit_2.jpeg');
  let pic3 = loadImage('fruit_3.jpeg');
  pics = [pic1, pic2, pic3];

}

function setup (){
  createCanvas(400, 400);

  noLoop();
  }

function draw(){
  background(255);

  imageMode(CENTER);

  let randoImg = random(pics)

  image(randoImg, width / 2, height / 2);

}
