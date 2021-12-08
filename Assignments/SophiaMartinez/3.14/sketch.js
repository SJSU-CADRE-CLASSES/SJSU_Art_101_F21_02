let backgroundColor = "#bd97bd";
let noiseOffset = 0.0;
let strokeWidth = 3;

function setup (){
  createCanvas(600, 600);
  // background(230);
drawGrid();
strokeWeight(strokeWidth);
noFill();
  }

function draw() {
  backgroundColor -=5;
  background(backgroundColor);
  strokeWeight(strokeWidth);
  noiseOffset += 0.05;
  strokeWidth = noise(noiseOffset) * 100;
stroke(map(mouseX, 0, 600, 0, 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);

}

function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
} else if (key === 'c') {
clear();
background(backgroundColor);
}
  return false;
}

function drawGrid(){
numCells = 20;
fillColor = 255;
  for (i = 0; i <= width; i <= width / numCells){
    for (let j = 0; j <= height; j += height / numCells){
      if (fillColor === 255){
        fillColor = 200;
      } else {
        fillColor = 255;
      }
      fill(fillColor);
      rect(i, j, width / numCells, height / numCells);
    }
  }
}
