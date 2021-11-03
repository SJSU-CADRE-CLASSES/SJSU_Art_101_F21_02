let array = [];




function setup() {
  createCanvas(600, 600);
  background(220,50,344);

  strokeWeight(2);
  noFill();
}

function draw() {

  if(mouseIsPressed){
    // stroke(map(mouseX, 0, 600, 0, 255, true))
    // line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
background(0);
    array.push([mouseX, mouseY]);
}

}

function keyTyped(){


  if (key === 's'){

    saveCanvas('fileName', 'png');
} else if (key === 'd'){
  // console.log(array[0]);
  // console.log(array[0][1]);

  background(255);

  beginShape();
  for(let i = 0; i < array.length; i++){
  // line(array[i][0], array[i][1], array[i + 1][0], array[1][1]);
  curveVertex(array[i][0], array[i][1]);
}
  endShape();



}
  return false;
}
