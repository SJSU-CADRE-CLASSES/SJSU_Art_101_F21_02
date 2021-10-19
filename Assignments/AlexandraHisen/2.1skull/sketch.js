let mic;
let micLevel;
let vol;
let cnv;
let x = 0;
let y1 = 100;
let y2 = 160;
let y3= 250


function setup() {
  cnv = createCanvas(400, 400);
  cnv.mouseWheel(pupils); 
  mic = new p5.AudioIn();
  mic.start();
count = 0;
}

class Skull {
  constructor(_xpos,_ypos,rot) {
    
    this._xpos = _xpos;
    this._ypos = _ypos;
    this.rot= rot; 
  }
  display(){
    rectMode(CENTER)
    push()
    translate(this._xpos,this._ypos)
    rotate (count*this.rot);
    fill(240)
    square (0,0,50)
    square(0,27,35);
    fill(0)
    square(-10,5,10)
    square(12,5,10)
    pop()
    rectMode(CORNER)
    count = count+0.01
  }
}
function draw() {
   background (100,150,450);
  noStroke()
  console.log(mic.getLevel());
  skull(255)
  eyes ()
  nose ()
  pupils ()
  teeth (mic.getLevel()*1000)
  
 
  
  skullA = new Skull(148,-5, -0.5);
  skullA.display()
  skullM= new Skull (250,-5,0.5);
  skullM.display ()
  skullBiella = new Skull(390,50, -0.5);
  skullBiella.display()
  skullSrc= new Skull (390,200,-0.5);
  skullSrc.display ()
  skullHid= new Skull (390,280,0.5);
  skullHid.display ()
  skullRnc= new Skull (390,360,-0.5);
  skullRnc.display ()
  skullKnl= new Skull (40,400,0.5);
  skullKnl.display ()
  skullPet = new Skull(10,300, -0.5);
  skullPet.display()
  skullSjsu = new Skull(10,150, 0.5);
  skullSjsu.display()
 
 

  
 }
   function skull(boneColor){
  fill(boneColor)
  square(65, 45, 270);
  square (100,200,200)
}
function eyes(){
 fill(100,200,400)
  square (100,100,75)
 
  fill(100,200,400)
  square (225,100,75)
}

function nose (){
  fill(100,200,400)
  triangle(200, 210, 170, 250, 230, 250)
}

function teeth (open){
 fill(100,200,400)
  rect(100, 340, 200, open)
  rect(120, 330, 20, open+30)
  rect(175, 330, 20, open+30)
  rect(225, 330, 20, open+30)
  rect(270, 330, 20, open+30)
}
 
 function pupils (){
 fill (255)
   ellipse (137.5,y1,30)
  ellipse (262.5,y1,30)
  rect (137.5,y2,20)
  rect (245,y2,20)
   ellipse (137.5,y3,40)
  ellipse (260,y3,40)
 }


function mouseWheel() {
    y1 = y1 + 2;
  y2 = y2 + 2;
  y3 = y3 + 2;
 
if (y1 > 300) {
    y1 = 60;
  }
  if (y2 > 300) {
    y2 = 60;
  }
  
  if (y3 > 300) {
    y3 = 60;
  }


}



