let array = [];
let backgroundColor = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
}

function draw() {
  background(220, 50, 133, 5);
  strokeWeight(5);
  noFill();

if (mouseIsPressed){
  backgroundColor -= 5;
  background(backgroundColor);

// stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 255, true))
//
// line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

line(mouseX, mouseY, pmouseX, pmouseY);
array.push([mouseX, mouseY]);

beginShape();
for(let i = 0; i < array.length - 1; i++){

curveVertex(array[i][0], array[i][1])
}
endShape();

}
}


function keyTyped() {
  if (key === 's') {
    //save image
    saveCanvas('fileName', 'jpg');

} else if (key === 'c') {

  clear();
//
//
//   beginShape();
//   for(let i = 0; i < array.length; i++){
// 
// curveVertex(array[i][0], array[i][1])
// }
// endShape();
//   //display image



}


return false;
}

function mousePressed () {

array = [];
backgroundColor = 255;

}
