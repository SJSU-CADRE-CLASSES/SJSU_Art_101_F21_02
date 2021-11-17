let noiseOffset = 0.0;
let strokeWidth = 5;


function setup() {
  createCanvas(800, 800);
  background(22);
  
  
}

function draw() {

  if (mouseIsPressed) {

      //Stroke Weight
      strokeWeight(strokeWidth);

      //Noise Offset
     noiseOffset += 0.5;

      //Stroke Weight Changing
      strokeWidth = noise(noiseOffset) / 5;
 

    //Below changes to color of stroke
    stroke(map(mouseX, 0, 300, 0, 100, true));

    //Below draws in opposite direction
    //line(width - mouseX, height - mouseY, width - pmouseX, height - pmouseY);

    

    //Below draws an ellipse
        push();
        strokeWeight(2.5);
        fill(mouseX, mouseY, random(255), 275);
        ellipse(mouseX, mouseY, 150, 170);
        ellipse(width - mouseX, height - mouseY, 100, 100);
        
        //triangle(mouseX, mouseY, width - mouseX, height - mouseY, windowWidth / 2 , windowHeight / 2);
        pop();

  }
      
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