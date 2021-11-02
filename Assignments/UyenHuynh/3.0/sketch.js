function setup(){
  createCanvas(600,600);
  background(200);
  strokeWeight(5);
  line(width/2, 0, width/2,height);
  fill(0);
  ellipse(width/2, height/2,5,5)

}
function draw(){
  if (mouseIsPressed){
    line(width-mouseX, height-mouseY, width-pmouseX,height-pmouseY);
      line(mouseX, mouseY, pmouseX,pmouseY);

  }

}
