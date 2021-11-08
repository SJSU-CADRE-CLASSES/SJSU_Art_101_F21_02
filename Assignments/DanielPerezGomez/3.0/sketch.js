function setup() {
  createCanvas(600, 600);
  background(220);

  strokeWeight (5);
}

function draw() {
  if (mouseIsPressed){
    stroke(map(mouseX, 0, 600, 0, 255, true) );
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
} 

}

function keyTyped() {
  if (key == 's'){
    console.log(`key s is being typed`)
  }

  return false
}