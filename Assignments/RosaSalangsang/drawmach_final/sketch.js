let noiseOff = 0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(700, 700);
  strokeWeight(strokeWidth);
  stroke(51);
}

function draw() {
  if (mouseIsPressed){
  stroke(map(mouseX, 0, 650, 0, 130, true));
  strokeWeight(strokeWidth);
  noiseOff += 0.03;
  strokeWidth = noise(noiseOff) * 65
  line(mouseX, mouseY, pmouseX, pmouseY);
}
}
function keyTyped() {
  if (key === 's') {
    saveCanvas('zen', 'png')
  }
  else if (key === 'e') {
    clear();
  }
  return false;
}
