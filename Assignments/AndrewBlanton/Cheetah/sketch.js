let count = 0;
let myMap = 0;
let cheeta;

let starRot = 45;
let circleChange = false;

let star = [];

function setup() {
  var myCanvas = createCanvas(700, 200);
      myCanvas.parent("p5canvas");

  angleMode(DEGREES);
  
  for(let i = 0; i <= 400; i++){
    star[i] = new shootingStar(random(height),random(width),random(360),random(10)/10,random(1,20)/10);
  }

  cheeta = loadImage("lol.png");
}

function draw() {
  if (count<360){
    count++
  }else if (count==360){count=0};

  background(0);
  if (circleChange == true){
    circle(width/4,height/6,40);
  }
  
  for(let i = 0; i < star.length; i++){
      star[i].display();
      star[i].move();
  }
  myMap = map(40, 0, width, 0, 20);
  image(cheeta, width/2, height/2, cheeta.width/10, cheeta.height/10);
}