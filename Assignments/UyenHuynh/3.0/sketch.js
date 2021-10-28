function setup(){
  createCanvas(600,600);
  background(200);
  strokeWeight(5);
  line(width/2, 0, width/2, height);

}
function draw(){
  if (mouseIsPressed){
    line(mouseX, mouseY, pmouseX,pmouseY);
  }

}
