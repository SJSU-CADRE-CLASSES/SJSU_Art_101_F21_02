let pics = []; //CREATE AN EMPTY ARRAY TO STORE VARIABLES
let numPics = 3;
let randomIndex;


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

function randomizer() {
  animating = false
  if (pic[0]){
    randomIndex = int(random(pics.length));
    image(random[pics], width/2, height/2);
    pics.splice(randomIndex, 1);
  } else{
    background(random(200,255));
  }
}
  function buttonPressed(){
    animating = true;
    setTimeout(randomizer, 2000);
  }
