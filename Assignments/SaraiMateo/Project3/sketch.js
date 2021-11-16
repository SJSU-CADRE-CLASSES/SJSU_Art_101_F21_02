function setup() {
  createCanvas(1500, 700);
  background(225, 25, 65);

drawGrid();
  strokeWeight(5);

}

function draw() {

if (mouseIsPressed){
  stroke(255,179,179);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

}

function keyTyped(){
//  background(225, 25, 65);

  if (key === 's'){
    saveCanvas ('fileName', 'jpg');
  } else if (key === 'c'){
    clear();
  }
  stroke(204,229,255, 1);
  drawGrid();

  return false;
}

function drawGrid(){
  stroke(204,229,255, 45);
  numCells = 20;

  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      rect(i, j, width / numCells, height / numCells);
    }
}
}
