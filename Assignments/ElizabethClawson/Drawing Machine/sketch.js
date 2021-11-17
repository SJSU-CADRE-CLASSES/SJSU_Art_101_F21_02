let randomIndex;
let array = [];
let animating = false
let layout = [];
var img;
function preload (){
  for(let i = 0; i <= 3; i++){
    layout[i] = loadImage(`Layouts/layout_${i}.JPG`);
  }
}
function setup() {
  createCanvas(1260,500);
  background(209, 162, 98);
  strokeWeight(5);
  console.log(layout);
  imageMode(CENTERED);

  button = select('#genButton')
  button.position(560,200);
  button.class("randomizerButton");
}

function draw() {
  if (mouseIsPressed) {
    push();
    noStroke();
    erase(255);
    ellipse(mouseX,mouseY,20);
    noErase();
    pop();
  }
}
function keyTyped() {
  if (key === 's') {
    saveCanvas('Untitled', 'png');
}
    return false;
  }
function doubleClicked() {
  if (animating == true){
  image(layout[0],width/2, height/2);
  }
}
