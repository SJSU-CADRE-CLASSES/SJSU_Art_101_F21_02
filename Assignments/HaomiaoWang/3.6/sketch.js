let array = [];
let backgroundColor=200;

function setup (){
  createCanvas(windowWidth, windowHeight);
  background('#b3b3ff');
  strokeWeight(5);
  noFill();
  }

function draw() {

if (mouseIsPressed){
  // stroke(map(mouseX,0,600,0,255,true));
  // line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);

  background(backgroundColor);
  backgroundColor-=4;
  //line(mouseX,mouseY,pmouseX,pmouseY);
   array.push([mouseX, mouseY]);

   beginShape();
   for(let i = 0; i < array.length - 1; i++){
     //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
     curveVertex(array[i][0],array[i][1])
   }
   endShape();
  }

}

function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
  //display image
  background('#b3b3ff');

  beginShape();
  for(let i = 0; i < array.length - 1; i++){
    //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
    curveVertex(array[i][0],array[i][1])
  }
  endShape();

}
  return false;
}
function mousePressed()
{
  //console.log("mouse pressed function");
  array = [];

  //console.log(array);
}
