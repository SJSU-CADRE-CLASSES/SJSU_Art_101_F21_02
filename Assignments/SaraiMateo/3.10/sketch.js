let array = [];
let noiseOffset = 0.0;
let strokeWidth = 5

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(216, 249, 237);

  noFill();

}

function draw() {
  background(216, 249, 237, 5);
  //background(1, 50, 32);
  strokeWeight(strokeWidth)

  noiseOffset += 0.05 //same as noiseOffset=noiseOffset+0.01
  strokeWidth = noise(noiseOffset) * 10;


  stroke(map(mouseX, 0, 600, 0, 255, true))
//  line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
  line(mouseX, mouseY, pmouseX, pmouseY);
  //  array.push([mouseX, mouseY]);

}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpg')
  } else if (key === 'c') {
  clear();
  }
  return false;
}
