let backgroundColor = "#bd97bc";
let noiseOffset = 0.0;
let strokeWidth = 3;

function setup (){
  createCanvas(windowWidth, windowHeight);
  noFill();
  background(230);

  }

function draw() {
  background(220, 50, 133, 5)
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
