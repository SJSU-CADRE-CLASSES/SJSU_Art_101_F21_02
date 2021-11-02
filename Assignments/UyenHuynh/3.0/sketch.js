let array=[];

function setup(){
  let c = createCanvas(windowWidth, windowHeight);
  background(200);
  strokeWeight(5);
  noFill();


}
function draw(){
  if (mouseIsPressed){
    // line(width-mouseX, height-mouseY, width-pmouseX,height-pmouseY);
      // line(mouseX, mouseY, pmouseX,pmouseY);
      background(0);

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
