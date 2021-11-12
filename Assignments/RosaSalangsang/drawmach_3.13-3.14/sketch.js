//let array = [];
let noiseOff = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(700, 700);
  //background(240, 240, 228);
  drawGrid();
}

function draw() {
  background(240, 240, 228, 20);
  strokeWeight(strokeWidth);

  noiseOff += 0.03;
  strokeWidth = noise(noiseOff) * 20


  stroke(map(mouseX, 0, 600, 0, 155, true));
  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas('zen', 'png')
  }
  //  else if (key === 'd') {
  //   background(240, 240, 228);
  //   noFill();
  //   beginShape();
  //   for (let i = 0; i < array.length; i++) {
  //     //line(array[i][0],array[i][1],array[i+1][0],array[i+1][1]);
  //     curveVertex(array[i][0], array[i][1])
  //   }
  //   endShape();
  // }
  else if (key === 'e') {
    clear();
  }
  return false;
}

function drawGrid() {
  numCells = 20;
  fillColor=255;
  for (let i = 0; i <= width; i += width / numCells) {
    if (fillColor===255){
      fillColor = 200;
    } else{
      fillColor=255;
    }
    fill(fillColor);
    rect(i, 0, width / numCells, height / numCells);
    rect(i, 665, width / numCells, height / numCells);
    rect(0, i, width / numCells, height / numCells);
    rect(665, i, width / numCells, height / numCells);
  };
}
