let array = [];

function setup() {
  createCanvas(600, 600);
  background(220, 50, 133);

  strokeWeight(5);
}

function draw() {

if (mouseIsPressed){
line(mouseX, mouseY, pmouseX, pmouseY);
array.push([mouseX,  mouseY]);
}

}

 function keyTyped(){


   if (key ==='s'){
// save this image
saveCanvas('fileName', 'png');
} else if (key === 'd'){
  //display image
  console.log(array[0]);
}

   return false;
 }
