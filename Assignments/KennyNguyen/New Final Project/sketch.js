'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 1300;
let h = 575;
let player;
let coins = [];
let playerImg;
let coinImg;

function preload(){
  playerImg = loadImage('assets/raptor1.png');
  coinImg = loadImage('assets/enemy1.png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont('monospace');

  player = new Player();

  // coins = new Coin();
  coins.push(new Coin());
}

function draw() {

  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'You win!':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
    default:
      break;
  }

}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  } else if (key = ' ') {
    player.direction = 'still';
  }
}

function title(){
  background(0);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  text('Space Invasion', w/2, h/5);

  textSize(30);
  text('Instructions: crash into red planes to earn points', w/2, h/2.25);
  text('Controls: arrow keys to move, space-bar to stop', w/2, h/1.85);
  text('click the screen to start', w/2, h/1.25);
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'
}

function level1(){
  background(50, 150, 200);

  if (random(1) <= 0.01){
    coins.push(new Coin());
  }

  player.display();
  player.move();

  // iterating through coins array to display and move them
  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  // check for collision, if there is a collision increase points by 1 AND splice that coin out of array
  // need to iterate backwards through array
  for (let i = coins.length - 1; i >= 0; i--){
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r) / 2){
    points++;
    console.log(points);
    coins.splice(i, 1);
  }
}

text(`points: ${points}`, w / 4, h - 30);

}

function level1MouseClicked(){
  // points++;
  // console.log('points = ' + points);
  //
  // if (points >= 10){
  //   state = 'You win!';
  // }
}

function youWin(){
  background(57, 168, 65);
  textSize(80);
  stroke(255);
  text('You win!', w/2, h/2);

  textSize(30);
  text('click anywhere to restart', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
