let dogs = [{
    name: "January",
    color: "doo doo brown"
}, {
    name: "February",
    color: "cat eyes"
}, {
    name: "March",
    color: "dark colors"
}, {
    name: "April",
    color: "light colors"
}, {
    name: "May",
    color: "midgray colors"
}, {
  name: "June",
  color: "midgray colors"
}, {
  name: "July",
  color: "midgray colors"
}, {
  name: "August",
  color: "midgray colors"
}, {
  name: "September",
  color: "midgray colors"
}, {
  name: "October",
  color: "midgray colors"
}, {
  name: "November",
  color: "midgray colors"
}, {
  name: "December",
  color: "midgray colors"
}] ;

let randomIndex;
let animating = false;
let food = [];
let imageCounter = 0;
let button;
let cnv;

function preload(){

   for (let i = 0; i<=11; i++){
     food[i] = loadImage(`assets/food_${i}.jpg`)
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

  //First Page
  text("click to randomize", width/2, height/2); 
  
  //Button and style
  //button = createButton("click to randomize");
  //New Button
  button = select('#randButton')
  button.mousePressed(buttonPressed);
  button.class("randomizerButton");

}


function draw() {

  if(animating == true){
     clear();
     image(food[imageCounter], width/2, height/2);

     if (imageCounter < food.length - 1){
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
    image(random(food), width/2, height/2);

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