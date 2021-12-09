'use scrict';

let state = 'title';
let cnv;
let points = 5;
let w = 600;
let h = 600
let player;
let coins = [];
let playerImg;
let coinsImg;
let enemies= [];
let enemiesImg;
let berries = [];
let berriesImg;
let queen = [];
let queenImg;

function preload (){
  playerImg= loadImage('assets/mishkabear.png');
  coinsImg= loadImage ('assets/complex_honeycomb.png');
  enemiesImg= loadImage ('assets/bee.png');
  titleImg= loadImage ('assets/bear.png');
  berriesImg= loadImage ('assets/berries.png');
  queenImg= loadImage ('assets/queenbee.png');
}

function setup() {
  cnv =  createCanvas(w,h);


imageMode(CENTER);
rectMode (CENTER);

textFont ('gill sans');


player = new Player();
coins.push (new Coin());
enemies.push (new Enemy());
berries.push (new Boost());
queen.push (new Bomb());

}

function draw() {

  switch (state){
    case 'title':
    title();
    cnv.mouseClicked (titleMouseClicked);
    break;
    case 'level 1':
     level1();
     cnv.mouseClicked (level1MouseClicked);
    break;
    case 'you win':
      youWin();
    cnv.mouseClicked (youWinMouseClicked)
    break;
    case 'you lost':
      youLost();
    cnv.mouseClicked (youWinMouseClicked)
    default:
    break;
  }

}

function keyPressed (){
  if ( keyCode === LEFT_ARROW){
    player.direction = 'left'
  }else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  }else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  }else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  }else if (key = ' '){
    player.direction = 'still'
  }
}

function keyReleased (){
  let numberKeysPressed = 0;

  if (keyIsDown (LEFT_ARROW)){
    numberKeysPressed ++;
  }

  if (keyIsDown (RIGHT_ARROW)){
    numberKeysPressed ++;
  }

  if (keyIsDown (UP_ARROW)){
    numberKeysPressed ++;
  }

  if (keyIsDown (DOWN_ARROW)){
    numberKeysPressed ++;
  }
  console.log(numberKeysPressed);
  if (numberKeysPressed == 0){
    player.direction = 'still'
  }
}

function title(){
  background(248,213,8);
image (titleImg, w/ 2, h/1);

  textSize(120);
  fill (90,64,27)
noStroke();
  textAlign (CENTER);
  text('MISHKA', w/2, h/3);
  textSize (30);
  text ('click anywhere to start', w/2, h/2);

}

function titleMouseClicked(){
  console.log ('canvas is clicked on title page');
  state = 'level 1'
}

function level1(){
  background (30, 150,150)

  if (random (1) <= 0.02){
      coins.push(new Coin());
  }
  if (random (1) <= 0.03){
      enemies.push(new Enemy());
  }
  if (random (1) <= 0.0003){
      berries.push(new Boost());
  }
  if (random (1) <= 0.0005){
      queen.push(new Bomb());
  }

  player.display ();
  player.move ();

  for (let i= 0; i< coins.length; i++){
    coins[i].display();
    coins[i].move ();
  }

  for (let i= 0; i< enemies.length; i++){
    enemies[i].display();
    enemies[i].move ();
  }

  for (let i= 0; i< berries.length; i++){
    berries[i].display();
    berries[i].move ();
  }

  for (let i= 0; i< queen.length; i++){
    queen[i].display();
    queen[i].move ();
  }

for (let i= coins.length -1; i >= 0; i --){
  if (dist(player.x, player.y, coins[i].x, coins[i].y) <= (player.r + coins[i].r)/2){
    points++;
    console.log(points);
    coins.splice(i,1);
} else if (coins [i].y > h){
  coins.splice(i,1);
  console.log ('coins is vamoose');
}
}

for (let i= enemies.length -1; i >= 0; i --){
  if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r)/2){
    points--;
    console.log(points);
    enemies.splice(i,1);
} else if (enemies [i].y > h){
  enemies.splice(i,1);
  console.log ('enemies is vamoose');
}
}

for (let i= berries.length -1; i >= 0; i --){
  if (dist(player.x, player.y, berries[i].x, berries[i].y) <= (player.r + berries[i].r)/2){
    points= points+ 5;
    console.log(points);
    berries.splice(i,1);
} else if (berries [i].y > h){
  berries.splice(i,1);
  console.log ('berries is vamoose');
}
}

for (let i= queen.length -1; i >= 0; i --){
  if (dist(player.x, player.y, queen[i].x, queen[i].y) <= (player.r + queen[i].r)/2){
    points= points-10;
    console.log(points);
    queen.splice(i,1);
} else if (queen [i].y > h){
  queen.splice(i,1);
  console.log ('queen is vamoose');
}
}

     text (`health: ${points}`, w/7, h/10);
     if (points >= 20){
       state = "you win"
     } else if (points <=0){
       state = "you lost"
     }
}


function level1MouseClicked (){
  // points ++;
  // console.log ('points = ' + points);
  //
  // if (points >= 10) {
  //   state = 'you win';
  // }
}

function youWin (){
  background(248,213,8);
  textSize(120);
  noStroke();
  text('You Won!',w/2, h/2);
  textSize (30);
  text ('click anywhere to restart',w/2, h *3/4);
}

function youWinMouseClicked (){
  state = 'title';
  points = 5;
}

function youLost (){
  background(240,67,35);
  textSize(100);
noStroke();
  text('Game Over',w/2, h/2);

  textSize (30);
  text ('click anywhere to try again',w/2, h *3/4);
}

function youLostMouseClicked (){
  state = 'title';
  points = 5;
}
