let array=[];
let backgroundColor =200;

function setup(){
 createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  strokeWeight(5);
  noFill();


}
function draw(){
  if (mouseIsPressed){
    // line(width-mouseX, height-mouseY, width-pmouseX,height-pmouseY);
     
      background(backgroundColor);
      backgroundColor -=2;
      line(mouseX, mouseY, pmouseX,pmouseY);
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
  }else if ( key === 'c'){
    background(200);
  }
  return false;
}
