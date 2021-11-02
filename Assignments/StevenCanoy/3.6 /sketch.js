let array = [];

function setup() {
  createCanvas(600, 600);
  background(220);
  strokeWeight(5);
}

function draw() {
 
  /////If mouse is pressed, draw "______"
   if (mouseIsPressed == true){

     //Below can draw cool 3D looking hills 
        //ellipse(mouseX, mouseY, pmouseX, pmouseY)

     //Below draws a line
        //line(mouseX, mouseY, pmouseX, pmouseY)

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

    //Display Image
    for(let i = 0; i < array.length - 1; i++){
      line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);   
    }

   
  }


return false;

}