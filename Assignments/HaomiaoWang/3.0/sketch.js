let array = [];
function setup (){
  createCanvas(600, 600);
  background(220);
  strokeWeight(5);
  noFill();
  }

function draw() {

if (mouseIsPressed){
  // stroke(map(mouseX,0,600,0,255,true));
  // line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
  line(mouseX,mouseY,pmouseX,pmouseY);
  // background(0);
   array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
  //display image
  background(255);
  beginShape();
  for(let i = 0; i < array.length - 1; i++){
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0],array[i][1])
  }
}
  return false;
}
