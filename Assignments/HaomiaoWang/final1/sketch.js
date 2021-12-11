'use strict';

let state = 'title';
let cnv;
let points=0;
let w=1000;
let h=1000;
let player;
let slime;
let slimes = [];
let bslimes = [];
let dragonImg;
let slimeImg;
let bslimeImg;
let livesImg;
let beginImg;
let bg;
let lives = 3;
let liveObj;
let difficulty;
//music
let bgm;
let aoch;

function preload(){
  soundFormats("mp3");
  bgm=loadSound("greengum.mp3");

  myFont=loadFont('orange juice 2.0.ttf');

  dragonImg = loadImage('white.gif');
  slimeImg = loadImage('slime.gif');
  bslimeImg = loadImage('bslime.gif');
  livesImg = loadImage('lives.png');

  beginImg = loadImage('begin.gif');
  bg = loadImage('bg.png');
}

function setup() {
  cnv=createCanvas(w, h);
  textFont('orange juice 2.0');
  player=new Player();
  slime[0]=new Slime();
  bslime[0]=new Bslime();
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);


}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'begin':
      begin();
      cnv.mouseClicked(level1MouseClicked);
      break;
      case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
      break;
      case 'gameover':
      gameOver();
      cnv.mouseClicked(gameOverMouseClicked);
      break;
    default:
      break;
  }

  // if (state === 'title')
  // {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // }
  // else if (state === 'level 1&&points')
  // {
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // }
  // else
  // {

  // }
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (key = ' ') {
    player.direction = 'still'
  }
}

function keyReleased() {
  let numberKeysPressed = 0;

  if (keyIsDown(LEFT_ARROW)) {
    numberKeysPressed++;

  }
  if (keyIsDown(RIGHT_ARROW)) {
    numberKeysPressed++;
  }
  if (numberKeysPressed == 0) {
    player.direction = ' still';

  }
}

function title() {
background(bg);
imageMode(CORNER);
textSize(80);
fill(255, 153, 153);
textAlign(CENTER);
text('Catch the slimes', w/2, h/5);
textSize(50);
text("click anywhere to start",w/2, h/2);

}

function titleMouseClicked(){
  // console.log('canvas is clicked on title page');
  // state = 'level 1';
  state = "begin";
  points = 0;
  slimes = []
  bslimes = []
  lives = 3;
  liveObj = new Lives(lives);
  difficulty = 0.005;
}

function level1(){
  background(50,150,200);
  //text('click for points',w/2,h-30);
  player.display();
  slime.display();
  slime.move();
}



function level1MouseClicked(){
  points++;
  console.log('points = ' + points);
  if(points>=10){
    state='you win';
  }

  // points=poins+1;
  //points+=1;
}

function youWin(){
  background(255,50,80);
  textSize(80);
  stroke(255);
  text('you win', w/2, h/2);
  textSize(50);
  text("click anywhere to restart",w/2, h*3/4);

}
function youWinMouseClicked(){
  state='level 1';
  points=0;

}
