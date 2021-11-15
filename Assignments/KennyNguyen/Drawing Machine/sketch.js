let array = [];

function setup() {
  createCanvas(1200, 1000);
  background(63, 114, 224);

  strokeWeight(7);

}

function draw() {

  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  }

  return false;

}
