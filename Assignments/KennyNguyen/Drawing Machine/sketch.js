let array = [];

function setup() {
  createCanvas(1500, 1000);
  background(63, 114, 224);

  strokeWeight(3);
}

function draw() {

  if (mouseIsPressed){
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
  }

}

function keyTyped(){

  if (key === 's'){
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd'){
    // display image

beginShape();
    for(let i = 0; i < array.length; i++){
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curvedVertex(array[i][0], array[i][1])
    }
    endShape();

  }
  return false;

}
