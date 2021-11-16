let array = [];
let backgroundColor = 225;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);
  drawGrid();
  noFill();
}

function draw() {
  if (mouseIsPressed){
    // line(mouseX, mouseY, pmouseX, pmouseY);
    backgroundColor-= 4;
    background(backgroundColor);
    beginShape();
    for(let i = 0; i < array.length; i++){
    // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1]);
    }
    endShape();
    array.push([mouseX, mouseY]);
  } 

}

function keyTyped() {
  if (key == 's'){
    //save image
    saveCanvas('fileName','png');
  } else if (key == 'd'){
    //display image
    background(200);
    beginShape();
    for(let i = 0; i < array.length; i++){
    // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0], array[i][1]);
  }
    endShape();
  }
  return false
}

function mousePressed() {
  array = []
  backgroundColor = 225;
}

function drawGrid() {
  strokeWeight(0);
  numCells = 20;
  fillColor = 255;
  for (let i = 0; i <= width; i += width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width/numCells, height/numCells);
    }
  }
  strokeWeight(5);
}