'use strict';
let cnv;
let state = 'title';
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;

function setup() {
  cnv = createCanvas(600, 600);
  textFont('monospace');
  player = new Player();
  coin = new Coin();
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
    case 'win':
      win();
      cnv.mouseClicked(WinMouseClicked);
    break;
    default:
    break;
  }

//   if (state === 'title'){
//     title();
//     cnv.mouseClicked(titleMouseClicked);
//   } else if (state === 'level 1'){
//     level1();
//     cnv.mouseClicked(level1MouseClicked);
//   }
}

function keyPressed() {
  if (key == 'w'){
    player.direction = 'up'
  } else if (key == 's'){
    player.direction = 'down'
  } else if (key == 'd'){
    player.direction = 'right'
  } else if (key == 'a'){
    player.direction = 'left'
  } else if (key == ' '){
    player.direction = 'still'
  }

}

function title() {
  background('#000000');
  textSize(80);
  textAlign(CENTER);
  fill(255);
  text('MY GAME', w/2, h/5);

  textSize(30);
  text('Click to Start', w/2, h/2);
}

function titleMouseClicked() {
  console.log('title is clicked');
  state = 'level 1'
}

function level1() {
  background(50, 150, 200);
  text('click for points', w/2, h/5);
  player.display();
  player.move();
  coin.display();
  coin.move();
}

function level1MouseClicked() {
  points ++;
  console.log('ponits = ' + points)
  if (points >= 10){
    state = 'win'
  }
}

function win() {
  background(225, 50, 80);
  textSize(80);
  text('YOU WON', w/2, h/5);

  textSize(30);
  text('Click to Restart', w/2, h/2);
}

function WinMouseClicked() {
  state = 'level 1';
  points = 0;
}