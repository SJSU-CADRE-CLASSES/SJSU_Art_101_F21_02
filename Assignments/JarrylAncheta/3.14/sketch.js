let array = [];
let strokeWidth = 10
let noiseOffset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(120, 190, 255);

  drawGrid();
  noFill();

}

function draw() {

  background(330, 249, 220, 1);
  strokeWeight(strokeWidth)

  noiseOffset += 0.05
  strokeWidth = noise(noiseOffset) * 10;

  line(mouseX, mouseY, pmouseX, pmouseY);
  //  array.push([mouseX, mouseY]);

}


function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpg')
  } else if (key === 'c') {
    clear();
  }
  else if (key === 'd'){
    display();
  }
  return false;
}

function drawGrid() {
  numCells = 35;
  fillColor = 0;

  for (let i = 0; i <= width; i += width / numCells) {
    for (let j = 0; j <= height; j += height / numCells) {
if (fillColor === 255){
  fillColor = 255;
}else{
  fillColor = 255;
}
    fill(fillColor)
;      rect(i, j, width / numCells, height / numCells)

    }
  }
}
