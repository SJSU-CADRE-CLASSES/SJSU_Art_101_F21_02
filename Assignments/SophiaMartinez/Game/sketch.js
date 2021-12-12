'use strict';

let bg;
let state = 'title';
let cnv;
let score = 0;
let w = 600;
let h = 600;
let player;
let points = [];
let playerImg;
let pointImg;

function preload(){
  bg = loadImage('images4game/bg.png');
  playerImg = loadImage('images4game/bigdipper.png');
  pointImg = loadImage('images4game/Rotating-golden-star.gif');
}

function setup() {
  cnv = createCanvas(w, h);
  textFont('monospace');

  player = new Player();
// points[0][0] = new Points();
  points[0] = new Points();

}

function draw() {
background(bg);
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still'
  }
}

function title() {
  background(100);
  textSize(40);
  fill(255);
  text('FOOLS QUEST', w / 2, h / 5);
  textAlign(CENTER);
  textSize(30);
  text('click anywhere to start', w / 2, h / 2);
}


function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);

if (random(1) <= 0.01){
  points.push(new Points());
}

  player.display();
  player.move();


  for (let i = 0; i < points.length; i++){
    points[i].display();
    points[i].move();
  }

  //check for collision, if there is a collision increase points[0] by 1 AND splice that coin out of array
for (let i = points.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, points[i].x, points[i].y) <= (player.r + points[i].r) / 2){
  score++;
  console.log(score);
  points.splice(i, 1);
}
}

text(`score: ${score}`, w / 4, h - 30);

}

function level1MouseClicked() {
  //   score++;
  //   console.log('score = '+ score);
  //
  //   if (score >= 10){
  //     state = 'you win';
  //   }
  // }

  function youWin() {
    background(255, 50, 80);
    textSize(40);
    stroke(255);
    text('YOU WIN', 100, 100);
    textSize(30);
    text('click anywhere to restart', w / 2, h * 3 / 4);
  }

  function youWinMouseClicked() {
    state = 'level 1';
    points[0] = 0;
  }
}
