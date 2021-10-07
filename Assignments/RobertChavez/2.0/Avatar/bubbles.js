class Bubble {
  constructor(x,y){ 
  this.x = x;
  this.y = y;
  
  }
    display() {
    stroke(255);
    fill(255, 34, 0, 50);
    ellipse(this.x, this.y, 24, 24);
  }

    move() {
    this.x = this.x + random(-1, 1);
    this.y = this.y - .5;

  }

 
  
}

// function Bubble(x, y) {
//   this.x = x;
//   this.y = y;

//   this.display = function() {
//     stroke(255);
//     fill(255, 0, 150, 50);
//     ellipse(this.x, this.y, 24, 24);
//   }

//   this.move = function() {
//     this.x = this.x + random(-1, 1);
//     this.y = this.y - .5;

//   }