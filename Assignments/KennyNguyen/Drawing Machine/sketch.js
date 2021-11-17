let array = [];

function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 1200x1000 pixels.
  bg = loadImage('https://i.postimg.cc/y62kYP8S/drawingmachine.png');
  createCanvas(1200, 500);

  strokeWeight(7);

}

function draw() {
  background(bg);
  if (mouseIsPressed){
    stroke(map(mouseX, 500, 600, 0, 100, true));
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('SaveYourMaze', 'png');
  }  else if (key === 'c') {
    // clear the image
    clear();
  }

  return false;

}
