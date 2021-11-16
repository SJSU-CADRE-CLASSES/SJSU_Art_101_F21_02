let angle=0;
// let strokeWeight();
function setup() {
  
  createCanvas(700,700);
  rectMode(CENTER);
  // background(200, 50, 133);
}

function draw() {
background(0);

for (let i = 45; i < mouseX; i += 45) {
  for (let j = 45; j < mouseY; j += 45) {
  noFill()
  stroke(mouseX - i, i, mouseY -j)
  // strokeWeight(2);

  let d = dist(mouseX,mouseY, i+width/2, j+height/2);

  let r=d/5;
  push();
  translate(i,j);
  rotate(-angle);
  rect(0,0,r-45,r-45);
  pop();

  push();
  translate(i,j);
  rotate(angle);
  ellipse(0,0,r,r);
  pop();
  push();
  translate(i,j);
  rotate(-angle);
  ellipse(0,0,r,r);
  pop();


  push();
  translate(i,j);
  rotate(angle);
  rect(0,0,r,r);
  pop();

  angle += 0.0003;
  }
}


}

function keyTyped(){
  if (key == '0') {
    stroke(250);
    strokeWeight(1);
  }
  if (key == '1') {
    stroke(250);
    strokeWeight(3);
  }
  if (key == '2') {
    stroke(250);
    strokeWeight(5);
  }
  if (key == '3') {
    stroke(250);
    strokeWeight(7);
  }
  if (key == '4') {
    stroke(250);
    strokeWeight(9);
  }
  if (key == '5') {
    stroke(250);
    strokeWeight(15);
  }
  if (key === 's'){
  saveCanvas('fileName', 'png');
}

}

//   return false;
//
// }
