'use strict';

// to convert to shoot 'em up
// 1. creating a projectile class
// 2. change player controls to move from left and right, space bar will launch projectile
// 3. test collisions between projectile and coins/enemies, instead of player

let state = 'title';
let cnv;
let points = 0;
let w = 1300;
let h = 575;
let player;
let coins = [];
let missiles = [];
let lazers = [];
let projectiles = [];
let playerImg;
let coinImg;
let missileImg;
let lazerImg;
// let bg;
// let song;
// let projectileImg;

function preload(){
  playerImg = loadImage('assets/raptor2.png');
  coinImg = loadImage('assets/enemy1.png');
  missileImg = loadImage('assets/missile1.png');
  lazerImg = loadImage('assets/lazer1.png');
  // bg = loadImage('assets/galaxy1.png');
  // song = loadSound ('assets/Album.mp3');
  // projectileImg = loadImage('assets/projectile1.png');
}

function setup() {
  cnv = createCanvas(w, h);
  frameRate(240);
  // song.loop();

  imageMode(CENTER);
  rectMode(CENTER);

  textFont('monospace');

  player = new Player();

  // coins = new Coin();
  coins.push(new Coin());
  // missiles = new Missile();
  missiles.push(new Missile());
  // lazers = new Lazer();
  lazers.push(new Lazer());
  // projectiles = new Projectile();
  projectiles.push(new Projectile);

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
    case 'game over':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
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
  } else if (keyCode == CONTROL) {
    projectiles.push(new Projectile);
  }
}

function keyReleased(){

  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)){
    numberKeysPressed++;
  }

  if (keyIsDown(RIGHT_ARROW)){
    numberKeysPressed++;
  }

  if (keyIsDown(DOWN_ARROW)){
    numberKeysPressed++;
  }

  if (keyIsDown(UP_ARROW)){
    numberKeysPressed++;
  }

  console.log(numberKeysPressed);

  if (numberKeysPressed == 0){
    player.direction = 'still';
  }
}

function title(){

  // if (song.isPlaying()) {
  //   // .isPlaying() returns a boolean
  //
  //   song.play();
  //   background(0);
  // } else {
  //   song.play();
  //   background(45, 72, 145);
  // }

  background(0);
  textSize(80);
  stroke(255);
  textAlign(CENTER);
  fill(144, 144, 252);
  text('Infinite Warfare ✈️🚀🌌', w/2, h/5);

  push();
  textSize(25);
  fill(144, 144, 252);
  text('Objective: Shoot enemy planes and avoid colliding with missiles and lasers!', w/2, h/2.5);
  text('Enemies +1pt, Missiles -5 pts, Lasers -3pt', w/2, h/2);
  pop();

  push();
  textSize(20);
  fill(255, 255, 255);
  text('🔼', w/2.205, h/1.44);
  text('Player Controls:           to MOVE / CTRL key to SHOOT', w/2, h/1.4);
  textSize(20);
  text('◀️🔽▶️', w/2.205, h/1.35);
  text('-- click the screen to begin --', w/2, h/1.10);
  pop();
}

function titleMouseClicked(){
    console.log('canvas is clicked on title page');
    state = 'level 1'
}

function level1(){
  background(41, 64, 140);

  if (random(0.2) <= 0.01){
    coins.push(new Coin());
  }

  if (random(0.5) <= 0.01){
    missiles.push(new Missile());
  }

  if (random(0.1) <= 0.01){
    lazers.push(new Lazer());
  }

  player.display();
  player.move();

  // iterating through coins array to display and move them
  // using for loop
  for (let i = 0; i < coins.length; i++){
    coins[i].display();
    coins[i].move();
  }

  // iterating through missiles array to display and move them
  // using for loop
  for (let i = 0; i < missiles.length; i++){
    missiles[i].display();
    missiles[i].move();
  }

  // iterating through lazers array to display and move them
  // using for loop
  for (let i = 0; i < lazers.length; i++){
    lazers[i].display();
    lazers[i].move();
  }

  // iterating through projectiles array to display and move them
  // using for loop
  for (let i = 0; i < projectiles.length; i++){
    projectiles[i].display();
    projectiles[i].move();
  }

for(let i = projectiles.length - 1; i >= 0; i--){
  // check for collision with COINS, if there is a collision increase points by 1 AND splice that coin out of array
  // need to iterate backwards through array
  for (let j = coins.length - 1; j >= 0; j--){
  if (dist(projectiles[i].x, projectiles[i].y, coins[j].x, coins[j].y) <= (projectiles[i].r + coins[j].r) / 2){
    points++;
    coins.splice(j, 1);
  } else if (coins[j].y > h){
    coins.splice(j, 1);
    // console.log('coin is out of town');
  }
}

  // check for collision with MISSILES, if there is a collision increase points by 1 AND splice that missile out of array
  // need to iterate backwards through array
  for (let j = missiles.length - 1; j >= 0; j--){
  if (dist(player.x, player.y, missiles[j].x, missiles[j].y) <= (player.r + missiles[j].r) / 2){
    points -= 10;
    missiles.splice(j, 1);
  } else if (missiles[j].y > h){
    missiles.splice(j, 1);
    // console.log('missile is out of town');
  }
}

  // check for collision with LAZERS, if there is a collision increase points by 1 AND splice that lazer out of array
  // need to iterate backwards through array
  for (let j = lazers.length - 1; j >= 0; j--){
  if (dist(player.x, player.y, lazers[j].x, lazers[j].y) <= (player.r + lazers[j].r) / 2){
    points -= 3;
    lazers.splice(j, 1);
  } else if (lazers[j].y > h){
    lazers.splice(j, 1);
  // console.log('lazer is out of town');
  }
}
}

push();
textSize(20);
fill(255, 255, 255);
text('Move: 🔼◀️🔽▶️', 120, 40);
pop();

push();
textSize(20);
fill(255, 255, 255);
text('Shoot: CTRL', 93, 70);
pop();

push();
textSize(30);
fill(144, 144, 252);
text(`Points Earned: ${points}`, w / 7, h - 30);
pop();

  // check point values to win or lose the game
  if (points <= -1) {
    state = 'game over';
  }
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

function gameOver(){
  push();
  background(222, 46, 33);
  textSize(80);
  stroke(255);
  fill(0);
  text('Game Over! You have died 💀', w/2, h/2);
  pop();

  push();
  textSize(30);
  fill(255, 255, 255);
  text('-- click the screen to return to title screen --', w/2, h * 3/4);
  pop();
}

function gameOverMouseClicked(){
  state = 'title';
  points = 0;
}
