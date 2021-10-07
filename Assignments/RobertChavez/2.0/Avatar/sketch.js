let mic;
var bubbles = [];
// let song;
var diam = 10;
var change = 5;

function preload(){
    // song = loadSound("meditate.mp3");
}

function setup(){
  let cnv = createCanvas(400, 400);
  
  textAlign(CENTER);
  mic = new p5.AudioIn();
  mic.start();
  // song.play();
  stroke(10);
  noFill()

}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY));
}

function draw() {
  

  let x = map(mouseX, 0, width, 0, 255);
  background(x,200,185,31);
  
  var col;
  if (diam < 100){
		col = color(243,252,255,);
  } else if (diam < 300) {
		col = (202,213,218);
  } else {
    col = color(202,213,218);
  }
  fill(col);
  
//breathe
  diam += change;
  if (diam > width){
		change = -change;
  } else if (diam < 0){ 
    change = -change;
  }
  
  ellipse(200,200,diam, diam);
  head();
  
  fill(142,188,229);
  stroke(56,77,161);
  
  body();
  
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].display();
  }
 
 
}

function head(){
    fill(142,188,229);
  stroke(56,77,161);
  circle(200,55,85);
  
   fill(71,119,169);
  noStroke(0);
  arc (180,42,15,18, PI, TWO_PI);
  
     fill(255);
  arc(180, 42, 15, 15 ,0,PI + TWO_PI,)
   fill(0);
  arc(180, 42,12, 12 ,0,PI + TWO_PI,)
   
  fill(255);
  arc(220, 42, 15, 15 ,0,PI + TWO_PI)
  fill(0);
  arc(220, 42,12, 12 ,0,PI + TWO_PI)
      
    fill(71,119,169);
  stroke(56,77,161);
  arc (220,43,15,18, PI, TWO_PI);
  
  micLevel = mic.getLevel();
 let y = 78 - micLevel * height*.1;
    //om 
  ellipse(200, y, 12, 13);
}
function body(){
  
  
  fill(234,160,28);
  beginShape();
  vertex (width*.45,height*.245);
  vertex (width*.55,height*.245,);
  vertex (width*.55,height*.3,);
  vertex (width*.6,height*.3,);
  vertex (width*.63,height*.32,);
  vertex (width*.63,height*.60,);
  vertex (width*.37,height*.60,);
  vertex (width*.37,height*.32,);
  vertex (width*.4,height*.3,);
  vertex (width*.45,height*.3,);
  endShape(CLOSE);
  
push();
  beginShape();
  fill(186,110,19);
  noStroke();
  vertex (width*.63,height*.60,);
  vertex (width*.37,height*.60,);
  vertex (width*.371,height*.5,);
  vertex (width*.628,height*.5,);
  endShape(CLOSE);
pop();
  
  beginShape();
  fill(234,160,28);
  vertex (width*.2, height*.6);
  vertex (width*.2, height*.5);
  vertex (width*.37, height*.32);
  vertex (width*.37, height*.5);
  vertex (width*.27, height*.6);
 
    endShape(CLOSE);
   
  beginShape();
  fill(234,160,28);
  vertex (width*.8,height*.6,);
  vertex (width*.8,height*.5,);
  vertex (width*.63,height*.32,);
  vertex (width*.63,height*.5,);
  vertex (width*.73,height*.6,);
  endShape(CLOSE);
  
  //leg
    beginShape()
  fill(234,160,28);
  vertex (width*.21, height*.6,);
  vertex (width*.79, height*.6,);
  vertex (width*.82, height*.65,);
  vertex (width*.82, height*.7,);
  vertex (width*.8, height*.75,);
  vertex (width*.8, height*.75,);
  vertex (width*.21, height*.75,);
  vertex (width*.18, height*.7,);
  vertex (width*.18, height*.65,);
  endShape(CLOSE);
  
  
//foot
beginShape();
  fill(234,160,28);
vertex(width*.38, height*.68);
vertex (width*.3, height*.8);
vertex (width*.4, height*.85);
vertex(width*.5, height*.72);
endShape();
  
 //left hand 
beginShape();
   fill(234,160,28);
  vertex (width*.12, height*.28)
  vertex (width*.11, height*.32)
  vertex (width*.17, height*.42)
  vertex (width*.17, height*.6)
  vertex (width*.22, height*.62)
  vertex (width*.27, height*.6)
  vertex (width*.27, height*.5);
  vertex (width*.26, height*.46);
  vertex (width*.34, height*.4);
  vertex (width*.34, height*.36);
  vertex (width*.29, height*.29);
  vertex (width*.25, height*.29);
  vertex (width*.23, height*.31);
  vertex (width*.23, height*.26);
  vertex (width*.21, height*.245);
  vertex (width*.19, height*.26);
   vertex (width*.17, height*.24);
   vertex (width*.16, height*.245);
   vertex (width*.15, height*.27); 
  vertex (width*.12, height*.28);
  endShape();
  
  beginShape();
  fill(201,132,49);
  vertex (width*.27, height*.325);
  vertex (width*.31, height*.38);
  vertex (width*.29, height*.395);
  vertex (width*.25, height*.338);
  vertex (width*.27, height*.325);
  endShape();
  
  line (59, 109, 65, 140);
  //line (54, 105, 76, 130);
  line (125, 129, 115, 137.5);
  line (76, 104,78, 128);
  
   beginShape();
 fill(234,160,28);
  vertex (width*.76, height*.62);
  vertex (width*.81, height*.6);
  vertex (width*.81, height*.45);
  vertex (width*.83, height*.4);
  vertex (width*.86, height*.33);
  vertex (width*.84, height*.32);
  vertex (width*.8, height*.375);
  vertex (width*.815, height*.35);
  vertex (width*.85, height*.29);
  vertex (width*.84, height*.27);
  vertex (width*.82, height*.28);
  vertex (width*.77, height*.34);
  vertex (width*.815, height*.28);
  vertex (width*.8, height*.26);
  vertex (width*.78, height*.27);
  vertex (width*.76, height*.3);
  vertex (width*.74, height*.28);
  vertex (width*.715, height*.28);
  vertex (width*.65, height*.35);
  vertex (width*.65, height*.39);
  vertex (width*.72, height*.47);
  vertex (width*.71, height*.5);
  vertex (width*.71, height*.6);
  vertex (width*.76, height*.62);
  endShape();
  
  beginShape();
  fill(201,132,49);
  vertex (width*.73, height*.315);
  vertex (width*.745, height*.335);
  vertex (width*.7, height*.38);
  vertex (width*.69, height*.36);
  vertex (width*.73, height*.315);
  endShape();
  
  line (275,124,284,134)
  line (90,271,295,271) 
}






  
