
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 204, 0);

  strokeWeight(7);
  noFill();

}

function draw() {

stroke(map(mouseX,0, 600, 0, 255, true))
line(width-mouseX, height - mouseY, width - pmouseX, height - pmouseY);   

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    //display image
    background(255, 204, 0);
    beginShape();
    for (let i = 0; i < array.length; i++) {
      //line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();

  }

  return false;

}
