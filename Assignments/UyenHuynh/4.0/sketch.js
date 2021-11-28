'use strict';

let state = "title";
let cnv;
let points = 0;
let w = 600;
let h = 600;
let player;
let coin;


function setup() {
  cnv = createCanvas(w, h);
  textFont('Courier'); 
  player = new Player();
  coin = new Coin();

}

function draw() {
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


function title() {
  background(100);
  textSize(80);
  textAlign(CENTER);
  text("MY GAME", w/2, h/5);
  textSize(30);
  text("click anywhere to start", w/2, h/2);

}

function titleMouseClicked() {
  console.log("canvas is clicked ");
  state = "level 1";

}

function level1() {
  background(50, 100, 200);
  text('click for points',  w/2, h/2);
  player.display();
  coin.display();
  coin.move();

}

function level1MouseClicked() {
  points ++;
  text('Points = '+ points);
  console.log("points ="+ points);
if (points >= 10){
  state = 'you win'
}
}

function youWin(){
  background(255,90,100);
  textSize(80);
  text('You Win',  w/2, h/5);
  textSize(30);
  text("click anywhere to restart", w/2, h/2);


}

function youWinMouseClicked(){
state ='level 1';
points = 0;
}