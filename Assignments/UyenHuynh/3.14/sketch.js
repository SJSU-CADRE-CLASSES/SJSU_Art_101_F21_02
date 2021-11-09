let array=[];
let backgroundColor =200;

function setup(){
 createCanvas(600, 600);
  // background(backgroundColor);
  strokeWeight(3);
  noFill();
  drawGrid();

}
function draw(){
  if (mouseIsPressed){
      // background(backgroundColor);
      backgroundColor -=2;
      // line(mouseX, mouseY, pmouseX,pmouseY);
      array.push([mouseX, mouseY]);
      
  }
  

}
function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName','png');
  }else if (key ==='d'){
    background(200);
    beginShape();
    for (let i=0; i< array.length; i++){
      // line(array[i][0],array[i][1],array[i+1][0],array[i+1][1] )
      curveVertex(array[i][0], array[i][1])
    } 
  endShape();
//   }else if ( key === 'c'){
//   clear();
//   background(200);

//   array.length = 0;  
// }
  return false;
}
}
function mousePressed(){
  array = [];
  backgroundColor = 255;
}
function drawGrid(){
  numCells = 20;
  fillColor= 255;
  strokeWeight(0);
  for ( let i = 0; i<= width; i+=width/numCells){
    for ( let j = 0; j<= height; j+= height/numCells){
      if (fillColor === 255){
        fillColor = 200
      } else{
        fillColor =255;
      }
      fill(fillColor); 
      rect(i, j, width/numCells, height/numCells);
    }
    
  }
}
strokeWeight(5);
