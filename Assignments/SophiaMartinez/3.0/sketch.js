var audio = new Audio('media/wooshing.mp3');
  audio.play();

function setup () {
  createCanvas(600, 600);
  background(230);
  strokeWeight(4);
// noFill();
  }

function draw() {
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    // stroke(map(mouseX, 0, 600, 0, 255, true))
  }
background(199, 168, 107);

}

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
