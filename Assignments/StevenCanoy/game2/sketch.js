var x, y;
var shot;
var speed;
var speed2;
let img;
let img2;
let img3;
let img4;
let img5;



function setup() {
  createCanvas(600, 400);
  x = random(5, 390);
  y = 400;
  speed = random(4, 8);
  speed2 = random(-7,7);
  score=0;
  shot = false;
  // speed = -0.02;
  img = loadImage("images/target2.png");
  img2 = loadImage("https://cdn.glitch.com/dde918b5-8600-4a5a-9d1e-4198b1bf5398%2Fyxa7lban12o21.png?v=1614371137366");
  img3 = loadImage("https://cdn.glitch.com/dde918b5-8600-4a5a-9d1e-4198b1bf5398%2F24918-9-gunshot-photos-thumb.png?v=1614371764648");
  img4=loadImage("images/target3.png");
  img5=loadImage("images/shootingrange.jpeg")
}

function draw() {
  background(220);
  image(img5, 0, 0, 600, 400);
  //print(score);
  if (shot==false){
    target1(img);
  }  
  //text
  push();
  textSize(30);
  fill(0,0,0);
  text("score: " + score, 50, 380);
  pop();
  //distancecheck
  if (dist(x, y, mouseX, mouseY) < 40) {
    // x = random(1,200);
    if (mouseIsPressed) {
      shot = true;
    }
  }
  

  //movement
  y = y - speed;
  x = x + speed2;
  
  if (y < random(-10, -1000)) {
    y = 420;
    x = random(5, 590);
    speed = speed * 1.007;
    speed2 = random(-8, 8) ;
  }
  if (shot == true) {
    speed = -7;
    speed2 = 0
    push();
    noStroke();
    fill(220);
    //rect(x-50, y-50, 100,100)
    target1(img4);
    pop();
    
    if (y > 440) {
      shot = false;
      x = random(5, 580);
      speed = random(4,12);
      speed2 = random(-7,7);
      score += 1;
    }
  }
    if (score == 30){
    target1(img2)
  }  
  if (mouseIsPressed) {
  image(img3, mouseX-75, mouseY-80,200,200)
  aim(mouseX,mouseY);
  }
  aim(mouseX, mouseY);
//ellipse (100, 100, 30, 30);
}

function aim(i, o) {
  push();
  stroke(20);
  fill(0, 0, 0, 0);
  ellipse(i, o, 15);
  ellipse(i, o, 50);
  stroke(255, 0, 0);
  line(i, o + 8, i, o + 30);
  line(i, o - 8, i, o - 30);
  line(i + 8, o, i + 30, o);
  line(i - 8, o, i - 30, o);
  image(img2, i-40,o-15, 200,130);
  pop();
}

function target1(q) {
  noStroke();
  fill(100, 200, 100)
  //ellipse(x, y, 50, 50);
  image(q,x-50,y-50,100,100);

}