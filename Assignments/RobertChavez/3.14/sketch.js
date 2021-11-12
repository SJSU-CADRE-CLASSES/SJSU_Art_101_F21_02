let array = [];
let backgroundColor = 200;



function setup() {
  createCanvas(600, 600);
  // background(backgroundColor);

drawGrid();
  strokeWeight(5);
  noFill();
}

function draw() {

  if(mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true))

    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);

    beginShape();
    for(let i = 0; i < array.length; i++){
    // line(array[i][0], array[i][1], array[i + 1][0], array[1][1]);
    curveVertex(array[i][0], array[i][1]);
}
  endShape();
}
}

function keyTyped(){


  if (key === 's'){

    saveCanvas('fileName', 'png');
} else if (key === 'd'){
  // console.log(array[0]);
  // console.log(array[0][1]);

  background(255);

  beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[1][1]);
  curveVertex(array[i][0], array[i][1]);
}
  endShape();



}
  return false;

}

function mousePressed (){

  array = [];
  backgroundColor = 255;

}

function drawGrid(){
  numCells = 20;
  fillColor = 255;
  strokeWeight(0);

  for(let i = 0; i <= width; i += width / numCells){
      for (let j=0; j <= height; j += height / numCells){
        if (fillColor == 255){
          fillColor = 200;
        } else {
          fillColor = 255;
        }
      fill(fillColor);
      rect(i,j, width / numCells, height / numCells )
      }
  }
  strokeWeight(5);
}
