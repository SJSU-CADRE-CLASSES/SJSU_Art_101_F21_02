'use strict';
let elfs = [];
let badelfs = [];
let dragonImg;
let elfImg;
let badelfImg;
let dImg;
let bg;
let fx;

function preload(){
  soundFormats("mp3");
  fx=loadSound(".mp3");

  myFont=loadFont('orange juice 2.0.ttf');

  dragonImg = loadImage('white.gif');
  elfImg = loadImage('elf.gif');
  badelfImg = loadImage('');
  dImg = loadImage('d.png')

  bg = loadImage('background.png');
}



function setup() {
  createCanvas(1000, 1000);
  // textAlign(CENTER);
  // textFont('orange juice 2.0');
  // player = new Player();
  // elfs.push(new Elf());
}

function draw() {
  background(100);
  textSize(80);
  stroke(255);
  text('my game', 100, 100);
  // switch (state) {
  //   case 'title':
  //     title();
  //     cnv.mouseClicked(titleMouseClicked);
  //     break;
  //   case 'begin':
  //     begin();
  //     if (points >= 10){
  //     state = 'win';
  //     }
  //     if (lives == 0){
  //     state = 'oh no'
  //     }
  //     break;
  //   case 'win':
  //     win();
  //     cnv.mouseClicked(youWinMouseClicked);
  //     break;
  //   case 'oh no':
  //     ohNo();
  //     cnv.mouseClicked(gameOverMouseClicked);
  //     break;
  //   default:
  //     break;
  // }
}



// function keyPressed() {
//   if (keyCode == LEFT_ARROW) {
//     player.direction = 'left'
//   } else if (keyCode == RIGHT_ARROW) {
//     player.direction = 'right'
//   } else if (key = ' ') {
//     player.direction = 'still'
//   }
// }
// function keyReleased() {
//   let numberKeysPressed = 0;
//
//   if (keyIsDown(LEFT_ARROW)) {
//     numberKeysPressed++;
//
//   }
//   if (keyIsDown(RIGHT_ARROW)) {
//     numberKeysPressed++;
//   }
//   if (numberKeysPressed == 0) {
//     player.direction = ' still';
//
//   }
// }
//
// function title() {
//   background(d);
//   imageMode(CORNER);
//   textSize(90);
//   textAlign(CENTER);
//   textFont('orange juice 2.0');
//   //fill('#778899');
//   text("Catch Elfs!", w / 2.5, h / 1.5);
//   textSize(30);
//   text("click anywhere to start", w / 2.5, h / 1.25);
//   textSize(30);
//   text("Help the white dragon catch the elf to complete the gift for the little girl!", w / 2.5, h / 1.5);
// }
//
//
//
//
// function titleMouseClicked(){
//
//   state = "begin";
//   points = 0;
//   elfs = [];
//   badelfs = [];
//   lives = 5;
//   liveObj = new Lives(lives);
//   difficulty = 0.005;
// }
//
//
// function begin(){
//   textAlign(CENTER);
//   background(bg);
//   computeDifficulty()
//   if (random(1) <= difficulty) {
//     elfs.push(new sugarCane(random(20, 100)));
//   }
//   if (random(1) <= difficulty) {
//     badelfs.push(new Monster(random(40, 70)));
//   }
//
//   player.display();
//   player.move();
//
//   for (let i = 0; i < elfs.length; i++) {
//     elfs[i].display();
//     elfs[i].move();
//   }
//   for (let i = 0; i < badelfs.length; i++) {
//     badelfs[i].display();
//     badelfs[i].move();
//   }
//
//   for (let i = elfs.length - 1; i >= 0; i--) {
//     if (dist(player.x, player.y, elfs[i].x, elfs[i].y) <= (player.r + elfs[i].r) / 2) {
//       points++;
//       collect.play();
//       console.log("points =" + points);
//       elfs.splice(i, 1);
//     } else if (elfs[i].y > h) {
//       elfs.splice(i, 1);
//       console.log("bye");
//     }
//   }
//
//   for (let i = badelfs.length - 1; i >= 0; i--) {
//     if (dist(player.x, player.y, badelfs[i].x, badelfs[i].y) <= (player.r + badelfs[i].r) / 2) {
//       lives--;
//
//
//       liveObj.loseLife()
//       console.log("lives =" + lives);
//       badelfs.splice(i, 1);
//     } else if (badelfs[i].y > h) {
//       badelfs.splice(i, 1);
//       console.log("bye");
//     }
//   }
// fill(17, 57, 191);
//   text('Points:' + points, w /13, h/6.6);
//   liveObj.display();
//
//   if (lives <= 0) {
//     state = 'oh no';
//   }
// }
//
//
//
//
//
//     textSize(20);
//     text('You help white get ' + points + ' elfs!',  w/5.3 , h - 20);
// }
//
//
// function ohNo() {
//
//   background();
//   textSize(80);
//
//   fill(255);
//   text('You help white get ' + points + ' elfs!',  w/5.3 , h - 20);
//
//
//   textSize(20);
//   text("Click anywhere to restart", w / 2, h / 3 +20);
//
//
// }
// function ohNoMouseClicked() {
//
//   state = 'title';
//   points = 0;
// }
//
//
