//let array = [];
// let backgroundColor=200;
let noiseOffset=0.0;
let strokeWidth=5;

function setup (){
  createCanvas(windowWidth, windowHeight);
  background(255, 221, 153);
  strokeWeight(5);
  //noFill();
  }

function draw() {

  background(255, 221, 153, 5);
  strokeWeight(strokeWidth);

  noiseOffset=noiseOffset+0.04;
  strokeWidth=noise(noiseOffset)*60;

  //if (mouseIsPressed){



    stroke(map(mouseX,0,600,0,255,true));
    line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);
    line(mouseX,mouseY,pmouseX,pmouseY);
    //array.push([mouseX, mouseY]);
//}


//if (mouseIsPressed){
  // stroke(map(mouseX,0,600,0,255,true));
  // line(width-mouseX,height-mouseY,width-pmouseX,height-pmouseY);

  // background(backgroundColor);
  // backgroundColor-=4;
  //
  //  array.push([mouseX, mouseY]);


  }



function keyTyped(){

  if (key === 's'){
    //save image
    saveCanvas('fileName', 'png');
  } else if (key === 'c'){
    //clear the image
    clear();

  // //display image
  // background('#b3b3ff');
  //
  // beginShape();
  // for(let i = 0; i < array.length - 1; i++){
  //   //line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
  //   curveVertex(array[i][0],array[i][1])
  // }
  // endShape();

}
  return false;
}
// function mousePressed()
// {
//   //console.log("mouse pressed function");
//   array = [];
//
//   //console.log(array);
// }
