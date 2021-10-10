let count = 0;
let value = 25;
let myMap = 0;
let circleChange = false;
let re, le;
let aOne;
let aTwo;

let bugs = [];

function setup(){
    let cnv = createCanvas(600,600);
    cnv.mousePressed(userStartAudio);
    mic = new p5.AudioIn();
    mic.start();
    background(252,197,172);

    angleMode(DEGREES);
    textAlign(CENTER,CENTER);
  
    for (let i = 0; i < 15; i++) {
    bugs.push(new Jitter());
    }
    for (let j = 0; j < 15; j++) {
    bugs.push(new Jitter());
    }
  
    noStroke();
    re = new Eye(420,300,90);
    le = new Eye(180,300,90);

    aOne = new Avatar(2,2);
    aTwo = new Back(2,2);
}

function draw(){ 
    background(252,197,172)
    fill(255);
    myMap = map(mouseX,0, width, 0 ,20);

    push(); 
    aTwo.display();
    pop();
  
    for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
    }

    for (let j = 0; j < bugs.length; j++) {
    push();
    bugs[j].move();
    bugs[j].display();
    pop();
    }

    aOne.display();
  
    re.update(mouseX, mouseY);
    le.update(mouseX, mouseY);
    re.display();
    le.display();
  
    lBrow(2,2);
    rBrow(2,2);
  
    aTwo.move();
    Eye(2,2);
    
    fill(200,50,90);
    textSize(25);
    text('Click Ears to Blush',300,30);

    //RUndereye
    noStroke();
    fill(249,77,105);
    circle(420,350,90);

    //LUndereye
    noStroke();
    fill(249,77,105);
    circle(180,350,90);
   
  if(circleChange == true){
      //RBlush
        noStroke();
        fill(230,0,3);
        circle(180,350,48);
      //LBlush
        noStroke();
        fill(230,0,3);
        circle(420,350,48);
  }
}

function mousePressed(){
          if(mouseX < width * 0.2 ||
            mouseY > height * 0.8 || 
            mouseX > width * 0.8 ||
            mouseY < height * 0.2){
            circleChange = !circleChange;
} 
}

function rBrow(xpos, ypos){
    push();
    micLevel = mic.getLevel();
    let y = height - micLevel * height;
    translate(width/xpos,height/ypos);
    rotate(count * 0.25);
    translate(width * -0.5,height * -0.5);
    noFill();
    strokeWeight(7)
    stroke(230,0,3);
    arc(width/1.43, y/2.5, 80, 80, 220, 320);
    pop();
}

function lBrow(xpos, ypos){
    push();
    micLevel = mic.getLevel();
    let y = height - micLevel * height;
    translate(width/xpos,height/ypos);
    rotate(count * 0.25);
    translate(width * -0.5,height * -0.5);
    noFill();
    strokeWeight(7)
    stroke(230,0,3);
    arc(width/3.33, y/2.5, 80, 80, 220, 320);
    pop();
}

function Eye(tx, ty, ts) {
    this.x = tx;
    this.y = ty;
    this.size = ts;
    this.angle = 0;

    this.update = function(mx, my) {
    this.angle = atan2(my - this.y, mx - this.x);
}

this.display = function() {
    push();
    translate(this.x, this.y);
    noStroke();
    fill(255);
    ellipse(0, 0, this.size, this.size);
    rotate(this.angle);
    noStroke();
    fill(0,0,0);
    ellipse(this.size / 4,
            0,
            this.size / 2,
            this.size / 2);
    pop();
} 
}