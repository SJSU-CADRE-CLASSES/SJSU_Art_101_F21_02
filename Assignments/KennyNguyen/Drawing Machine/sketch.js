function setup() {
  createCanvas(600, 600);
  background(245, 66, 114);

  strokeWeight(5);
}

function draw() {

  if (mouseIsPressed){
    strokeWeight(map(mouseX, 0, 600, 0, 255, true))
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

}
