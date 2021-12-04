'use strict';

let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coins = [];

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
  text('MY GAME', w/2, h/5);

  textSize(30);
  text('click anywhere to start', w/2, h/2);
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'
}

function level1(){
  background(50, 150, 200);

  player.display();
  player.move();

  coins[0].display();
  coins[0].move();

  // check for collision, if there is a collision increase points by 1
  if (dist(player.x, player.y, coins[0].x, coins[0].y) <= (player.r + coins[0].r) / 2){
    points++;
    console.log(points);
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
