let array=[];
let noiseOffset = 0.0;
let strokeWidth = 20;

let backgroundColor =0;

function setup(){
 createCanvas(windowWidth, windowHeight);
  background(backgroundColor);
  noFill();


}
function draw(){
  background(200,5);
  noiseOffset = noiseOffset + 0.01;
  strokeWeight(strokeWidth);
  strokeWidth = noise(noiseOffset) * 50;
  // if (mouseIsPressed){
     
      // background(backgroundColor);
      // backgroundColor -=2;
      line(mouseX, mouseY, pmouseX,pmouseY);
      array.push([mouseX, mouseY]);
  }

// }
function keyTyped(){
  if (key === 's'){
    saveCanvas('fileName','png');
  }else if (key ==='d'){
     beginShape();
    for (let i=0; i< array.length; i++){
      // line(array[i][0],array[i][1],array[i+1][0],array[i+1][1] )
      curveVertex(array[i][0], array[i][1])
    } 
  endShape();
  }else if ( key === 'c'){
   clear();
   array.length = 0; 
  }
  return false;
}
