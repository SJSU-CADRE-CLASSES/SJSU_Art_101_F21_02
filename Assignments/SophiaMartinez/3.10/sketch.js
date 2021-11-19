
function setup (){
  createCanvas(widthHeight, 600);
  background(230);
  strokeWeight(3);
  }

function draw() {

background (220, 50, 133, 20);

stroke(map(mouseX, 0, 600, 0 255, true))
line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);
line(mouseX, mouseY, pmouseX, pmouseY);
  }

}

function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
} else if (key === 'c') {
clear();
}
  return false;
}
