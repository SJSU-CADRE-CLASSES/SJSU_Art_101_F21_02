let noiseOff = 0.0;
let strokeWidth = 10;

function setup() {
  createCanvas(650, 650);
  strokeWeight(strokeWidth);
  ///stroke(51);
  smooth();
}

function draw() {
  if (mouseIsPressed){
  stroke(map(mouseX, 0, 600, 0, 100, true));
  strokeWeight(strokeWidth);
  noiseOff += 0.06;
  strokeWidth = noise(noiseOff) * 65;
  line(mouseX, mouseY, pmouseX, pmouseY);
  blendMode(BLEND);
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
