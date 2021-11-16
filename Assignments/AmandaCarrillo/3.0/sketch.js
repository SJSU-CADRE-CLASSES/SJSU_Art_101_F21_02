let array = [];
function setup() {
  createCanvas(600, 600);
  background(255, 204, 0);
  strokeWeight(7);

}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('Kaleidoscope', 'png');
  } else if (key === 'd') {
    //display image
    console.log(array);
  }
  return false;
}
