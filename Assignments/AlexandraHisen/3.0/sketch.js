let array =[]


function setup() {
  createCanvas(600,600);
  background (255);
  strokeWeight (5);
  stroke(255)
  noFill ();
}

function draw() {
  if (mouseIsPressed){
      array.push([mouseX, mouseY]);
  }
}
function keyTyped () {
      if (key === 's'){
saveCanvas ('fileName' , 'png');
} else if (key === 'd'){


beginShape ();
for ( let i =0; i < array.length; i++) {


curveVertex (array[i][0], array [i][1])
}
endShape ();



}
      return false;
}
