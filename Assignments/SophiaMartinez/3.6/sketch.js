let backgroundColor = "#bd97bc";
function setup (){
  createCanvas(windowWidth, windowHeight);
  // background(backgroundColor);
  noFill();
  strokeWeight(5);
  }

function draw() {
if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 30, true));
  line(mouseX, mouseY, pmouseX, pmouseY);
  }
}
// stroke(map(mouseX, 0, 600, 0 255, true));
// line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
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
