let x, y

function setup() {
  createCanvas(600, 600);
  background('black');
  stroke(255, 255, 255);
  strokeWeight(8);
  //Starting Point
  x = width / 2
  y = height / 2
}

function keyPressed() {
  let [oldX, oldY] = [x, y]
  //Keys
  if (key == 'w') {
    y -= 15
  } else if (key === 's') {
    y += 15
  } else if (key === 'a') {
    x -= 15
  } else if (key === 'd') {
    x += 15
  //Colors
  } else if (key === '1'){
    stroke(125, 237, 255)
    strokeWeight(8);
  } else if (key === '2'){
    stroke(126, 202, 156)
    strokeWeight(8);
  } else if (key === '3'){
    stroke(235, 146, 190)
    strokeWeight(8);
  } else if (key === '4'){
    stroke(245, 253, 176)
    strokeWeight(8);
  } else if (key === '5'){
    stroke(255, 255, 255)
    strokeWeight(8);
  //Erase
  } else if (key === 'e'){
    stroke(0, 0, 0)
    strokeWeight(10);
  //Save Image
  } else if (key === '0'){
    saveCanvas('squares','png');
  //Clear
  } else if (key === 'c'){
    clear();
    background('black');
  }
  //Drawing Space Edges
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  line(oldX, oldY, x, y);
  return false
}