let noiseOffset = 0.0;
let strokeWidth = 5;

let array = [];
let backgroundColor = 200;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);

}

function draw() {
  background(220, 50, 133, 5);
  strokeWeight(strokeWidth);
  noFill();

  noiseOffset += + 0.05;
  strokeWidth = noise(noiseOffset) * 100;

if (mouseIsPressed){
  // These create fade to black
  // backgroundColor -= 5;
  // background(backgroundColor);

stroke(map(mouseX, 0, 600, 0, 255, true), map(mouseX, 0, 600, 0, 255, true))
//
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

// line(mouseX, mouseY, pmouseX, pmouseY);
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

} else if (key === 'd') {

  // clear();
  beginShape();
  for(let i = 0; i < array.length; i++){

curveVertex(array[i][0], array[i][1])
}
endShape();
//   //display image

} else if (key === 'c') {
  background(backgroundColor);
  array = [];



}


return false;
}

// function mousePressed () {
//
//
// // backgroundColor = 255;
//
// }
