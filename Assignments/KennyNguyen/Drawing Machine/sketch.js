let array = [];

function setup() {
  createCanvas(1500, 1000);
  background(63, 114, 224);

  strokeWeight(3);
}

function draw() {

  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  }

  }
  return false;

}
