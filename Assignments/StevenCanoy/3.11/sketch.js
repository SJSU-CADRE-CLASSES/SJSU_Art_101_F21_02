

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220, 50, 133);
  strokeWeight(5);
  
}

function draw() {

      //Background
      background(220, 50, 133, 5);
 

    //Below changes to color of stroke
    stroke(map(mouseX, 0, 600, 0, 255, true));

    //Below draws in opposite direction
    line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

    //Below draws a line
        line(mouseX, mouseY, pmouseX, pmouseY);
      
   }



function keyTyped(){

  //Save Image of Canvas
  if (key ==='s'){
    saveCanvas('drawmachineimage', 'png');
  } else if (key === 'c'){

  //Clear Image
    clear();
   
   
  }


return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}