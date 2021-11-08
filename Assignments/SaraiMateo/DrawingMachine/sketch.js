let array = [];

function setup() {
  createCanvas(600, 600);
  background(216, 249, 237);

  strokeWeight(5)
  noFill();
}

function draw() {

  if (mouseIsPressed) {
  //  line(mouseX, mouseY, pmouseX, pmouseY);
  background(1,50,32);
    array.push([mouseX, mouseY]);
  }
}

function keyTyped() {

  if (key === 's') {
    saveCanvas('fileName', 'jpg')
  } else if (key === 'd') {
background(216, 249, 237);

beginShape();
    for(let i = 0; i < array.length; i++)
//line(array[i][0], array[i][1], array[i+1][0], array[i+1][1]);    }
curveVertex(array[i][0], array[i][1])
  }
  endShape();
  return false;
}
