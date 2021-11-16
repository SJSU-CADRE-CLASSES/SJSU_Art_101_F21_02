let array = [];
function setup (){
  createCanvas(600, 600);
  background(230);
  strokeWeight(3);
noFill();
  }

function draw() {

if (mouseIsPressed){
  array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
beginShape();
for (let i = 0; o < array.length; i++) {
    curveVertex(array[i][0], array[i][1]);
endShape();
  }
background(255);

}
  return false;
}
