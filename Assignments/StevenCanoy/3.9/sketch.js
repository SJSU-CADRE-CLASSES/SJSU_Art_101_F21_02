let array = [];
let backgroundColor = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  strokeWeight(5);
  noFill();
}

function draw() {
 
  /////If mouse is pressed, draw "______"
   if (mouseIsPressed) {

     //Fade Background to Black
     backgroundColor-=5;

    //Background
    background(backgroundColor);

    //Display Image
    beginShape();
    for(let i = 0; i < array.length; i++){
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);   
       curveVertex(array[i][0], array[i][1])
    }
    endShape();

    //Below draws a line
        //line(mouseX, mouseY, pmouseX, pmouseY)

     //Below can draw cool 3D looking hills 
        //ellipse(mouseX, mouseY, pmouseX, pmouseY)

      //Below pulls an array from an array
        array.push([mouseX,mouseY]);

      //Below draws in opposite direction
        //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY)

      //Below changes to color of stroke
        //stroke(map(mouseX, 0, 600, 0, 255, true))
   }

}

function keyTyped(){

  //Save Image of Canvas
  if (key ==='s'){
    saveCanvas('drawmachineimage', 'png');
  } else if (key === 'd'){

    //Turn background white again
    background(255);

    //Display Image
    beginShape();
    for(let i = 0; i < array.length; i++){
      //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);   
       curveVertex(array[i][0], array[i][1])
    }
    endShape();
   
  }


return false;

}

function mousePressed() {
  array = [];
  backgroundColor = 255;
}