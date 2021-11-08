let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);

  strokeWeight (5);
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

function mousePressed () {
  array = []
  backgroundColor = 200;
}