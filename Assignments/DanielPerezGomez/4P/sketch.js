'use strict';
// canvas dimensions
let cnv;
let w = 600;
let h = 600;
// starting state
let state = 'title';
// custom font
let fontOne;
// game components
let points = 0;
let lives = 4;
let player;
let trouts = [];
let enemies = [];

// sprite sheets & animation array
// let playerSS;
// let playerJSON;
// let playerAnimation = [];

// dialogue counter
var indexDialogue = 0;
//maid dialogue
let dialogueMaid = [
  "Hello master!, rise and shine", "", "", "Oh, it seems like you have a cold",
  "Don't worry I'll make you my famous trout soup", "", "", "",
  "Nonsense, I am your maid afterall", "I'll be back before you know it", "Just stay put"];
// boy dialogue
let dialogueBoy = [
  "", "*cough*cough*", "Sorry, but I don't feel so well", "",
  "", "uh ... WAIT NO!! ... I mean", "no need, I don't want to trouble you", "(Please not the soup, she's a bad cook)",
  "", "", ""];
//images
let introImage;
let playerImage;
let troutImage;
let enemyImage;

function preload() { 
  // custom font
  fontOne = loadFont('assets/OTF/dogica.otf');
  // images
  introImage = loadImage('assets/intro.jpg')
  playerImage = loadImage('assets/player.png')
  troutImage = loadImage('assets/trout.png')
  enemyImage = loadImage('assets/enemy.png')

  //player sprite sheet & json
  // playerSS = loadImage('assets/spritesheet.png');
  // playerJSON = loadJSON('assets/spritesheet.json')
}

function setup() {
  cnv = createCanvas(600, 600);
  player = new Player();
  trouts.push(new Trout());
  enemies.push(new Enemy());
  textFont(fontOne);
  
  // let playerFrames = playerJSON.frames;
  // for (let i = 0; i < playerFrames.length; i++){
  //   let pos = playerFrames[i].frame;
  //   let img = playerSS.get(pos.x, pos.y, pos.w, pos.h);
  //   playerAnimation.push(img);
  // }
}

function draw() {
  // game states
  switch (state){
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
    break;
    case 'intro':
      intro();
      cnv.mouseClicked(introMouseClicked);
    break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
    break;
    case 'win':
      win();
      cnv.mouseClicked(winMouseClicked);
    break;
    case 'lose':
      lose();
      cnv.mouseClicked(loseMouseClicked);
    break;
    default:
    break;
  }
}

function keyPressed() {
  if (key == 'w'){
    player.direction = 'up';
  } else if (key == 's'){
    player.direction = 'down';
  } else if (key == 'd'){
    player.direction = 'right';
  } else if (key == 'a'){
    player.direction = 'left';
  } 
}

function keyReleased() {
  let NKP = 0; // NKP = numbers of key pressed
  if (keyIsDown(87)){ // 87 = key code for up
    NKP++;
  }
  if (keyIsDown(83)){ // 83 = key code for down
    NKP++;
  }
  if (keyIsDown(68)){ // 68 = key code for right
    NKP++;
  }
  if (keyIsDown(65)){ // 65 = key code for left
    NKP++;
  }
  if (NKP == 0){
    player.direction = 'idle';
  }
}

function title() {
  push();
  background('#192959');
  textAlign(CENTER);
  textSize(40);
  fill('#FFFFFF');
  text("MAID'S SOUP", w/2 + 5, 250);
  textSize(16);
  text('CLICK TO START', w/2, h - 50);
  pop();
}

function titleMouseClicked() {
  indexDialogue = 0;
  state = 'intro'
}

function intro() {
  push();
  background('#192959');
  strokeWeight(6);
  stroke('#FFFFFF');
  noFill();
  //image
  image(introImage, 150, 150)
  // image container
  rect(150, 150, w/2, h/2);
  // button containers
  rect(150, h - 130, 145, 50);
  rect(305, h - 130, 145, 50);
  // text
  textAlign(CENTER);
  textWrap(WORD);
  textSize(20);
  noStroke();
  fill('#F8B3AE');
  text(dialogueMaid[indexDialogue], 60, 100, 500); // maid dialogue text
  fill('#D9936A');
  text(dialogueBoy[indexDialogue], 60, 100, 500); // boy dialogue text
  fill('#FFFFFF');
  text('NEXT', w/2 - 75, 502)
  text('SKIP', w/2 + 80, 502)
  pop();
}

function introMouseClicked() {
  // maid and boy dialogue counters
  if (indexDialogue == dialogueMaid.length)
  if (indexDialogue == dialogueBoy.length) 
  {
    indexDialogue = -1;
  }

  // button boundaries
  if ((mouseX > 150) && (mouseX < 295) && (mouseY > 470) && (mouseY < 530)){
    indexDialogue++;
  }
  if ((mouseX > 305) && (mouseX < 450) && (mouseY > 440) && (mouseY < 550)){
    state = 'level 1';
  }
}

function level1() {
  background('#5E92BF');
  // trouts spawn frequency
  if (random(1) <= 0.02){
    trouts.push(new Trout());
  }
  // enemies spawn frequency
  if (random(1) <= 0.02){
    enemies.push(new Enemy());
  }
  // player
  player.display();
  player.move();
  // trouts array for display and move
  for (let i = 0; i < trouts.length; i++){
    trouts[i].display();
    trouts[i].move();
  }
  // enemies array for display and move
  for (let i = 0; i < enemies.length; i++){
    enemies[i].display();
    enemies[i].move();
  }
  // check trout collision
  for (let i = trouts.length - 1; i >= 0; i--){
    if (dist(player.x, player.y, trouts[i].x, trouts[i].y) <= (player.r + trouts[i].r) / 2){
    points++
    trouts.splice(i, 1);
    } else if (trouts[i].y > h){
      trouts.splice(i, 1);
    }
  }
  // check enemy collision
  for (let i = enemies.length - 1; i >= 0; i--){
    if (dist(player.x, player.y, enemies[i].x, enemies[i].y) <= (player.r + enemies[i].r) / 2){
    lives--
    enemies.splice(i, 1);
    } else if (enemies[i].y > h){
      enemies.splice(i, 1);
    }
  }
  // check values to win or lose game
  text(`trout: ${points}`, w/2 - 290, h/6);
  text(`lives: ${lives}`, w/2 - 290, h/5);  
  if (points >= 15){
    state = 'win';
  } else if (lives <= 0){
    state = 'lose';
  }
}

function level1MouseClicked() {
  
}

function win() {
  push();
  background('#4D5934');
  textAlign(CENTER);
  textWrap(WORD);
  textSize(35);
  fill('#FFFFFF');
  text('YOU GATHERED THE TROUT', w/2 - 225, h/5, 500);
  textSize(20);
  text("YOU WERE ABLE TO MAKE YOUR TROUT SOUP, TO THE BOY'S DISMAY", w/2 - 235, 300, 500);
  textSize(16);
  text('CLICK TO RETURN TO TITLE', w/2, h - 50);
  pop();
}

function winMouseClicked() {
  state = 'title';
  points = 0;
  lives = 4;
}

function lose() {
  push();
  background('#73172F');
  textAlign(CENTER);
  textWrap(WORD);
  textSize(35);
  fill('#FFFFFF');
  text("YOU DIDN'T GATHER ENOUGH TROUT", w/2 - 225, h/5, 500);
  textSize(20);
  text("YOU'LL HAVE TO TRY AGAIN TOMORROW, TO THE BOY'S RELIEF", w/2 - 235, 300, 500);
  textSize(16);
  text('CLICK TO RETURN TO TITLE', w/2, h - 50);
  pop();
}

function loseMouseClicked() {
  state = 'title';
  points = 0;
  lives = 4;
}