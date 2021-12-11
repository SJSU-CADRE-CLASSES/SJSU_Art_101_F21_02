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
let gobg;
let winbg;
let lives = 3;
let liveObj;
let difficulty;
let myFont;
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
  gobg = loadImage('gobg.gif');
  winbg = loadImage('winbg.gif');
}

function setup() {
  cnv=createCanvas(w, h);
    textFont(myFont);
  player=new Player();
  slimes[0]=new Slime();
  bslimes[0]=new Bslime();
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  //bgm.loop();


}

function draw() {
  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'begin':
      begin();
      if (points >= 10){
      state = 'you win';
    }
    if (lives == 0){
      state = 'gameover'
    }
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
background(beginImg);
imageMode(CORNER);
textSize(80);
fill(255, 153, 153);
textAlign(CENTER);
text('Catch the slimes', w/2, h/5);
textSize(50);
text("click anywhere to start",w/2, h/1.57);

}

function computeDifficulty() {
  if (points > 0 && points % 10 == 0) {
    difficulty = (points / 10000) + 0.01;
  }
  console.log(difficulty)
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

function begin(){
  //background(50,150,200);
  //text('click for points',w/2,h-30);
  // player.display();
  // slime.display();
  // slime.move();
  if (!bgm.isPlaying()) {
   //bgm.play();
   bgm.loop();
 }
  background(bg);
  imageMode(CORNER);
  computeDifficulty()
  if (random(1) <= difficulty) {
    slimes.push(new Slime(random(100, 400)));
  }
  if (random(1) <= difficulty) {
    bslimes.push(new Bslime(random(100, 400)));
  }
  player.display();
  player.move();

  for (let i = 0; i < slimes.length; i++) {
    slimes[i].display();
    slimes[i].move();
  }
  for (let i = 0; i < bslimes.length; i++) {
    bslimes[i].display();
    bslimes[i].move();
  }

  for (let i = slimes.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, slimes[i].x, slimes[i].y) <= (player.r + slimes[i].r) / 2) {
      points++;
      console.log("points =" + points);
      slimes.splice(i, 1);
    } else if (slimes[i].y > h) {
      slimes.splice(i, 1);
      console.log("bye");
    }
  }
  for (let i = bslimes.length - 1; i >= 0; i--) {
    if (dist(player.x, player.y, bslimes[i].x, bslimes[i].y) <= (player.r + bslimes[i].r) / 2) {
      lives--;
      liveObj.loseLife()
      console.log("lives =" + lives);
      bslimes.splice(i, 1);
    } else if (bslimes[i].y > h) {
      bslimes.splice(i, 1);
      console.log("bye");
    }
  }
fill(255, 195, 77);
  text('Points:' + points, w /12, h/6);
  liveObj.display();

  if (lives <= 0) {
    state = 'gameover';
  }
}

function gameOver() {
  //clear();
  background(230, 238, 255);
  background(gobg);
  textSize(70);
  fill(128, 170, 255);
  text('You score:', w / 2, h/4 );
  text(points  + ' points', w / 2, h/1.8-150);

  textSize(45);
  text("Click anywhere to restart", w / 2, h / 2+90);
  bgm.stop();

}

function gameOverMouseClicked() {

  state = 'title';
  points = 0;
}

function youWin(){
  background(230, 255, 230);
  background(winbg);
  textSize(70);
  fill(132, 225, 132);
  text('You score:', w / 2, h/4 );
  text(points  + ' points', w / 2, h/1.8-150);

  textSize(45);
  text("Click anywhere to restart", w / 2, h/1.5+150);
  bgm.stop();

}

function youWinMouseClicked(){
  state = 'begin'
points = 0;
lives = 3;


}
