
function setup () {
  createCanvas(600, 600);
  background(230);
  strokeWeight(4);
// noFill();
  }

function draw() {

  // if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
background(199, 168, 107);
line(mouseX, mouseY, pmouseX, pmouseY);



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
