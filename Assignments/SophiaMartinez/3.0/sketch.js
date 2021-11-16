let strokeWidth = 8;
var audio = new Audio('media/wooshing.mp3');
  audio.play();

function setup () {
  createCanvas(600, 600);
  background(230);
  strokeWeight(strokeWidth);
  smooth();
  }

function draw() {
  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
// background(199, 168, 107);

function keyTyped() {
  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'c') {
    //clear the image
    clear();
  }
  return false;
}
