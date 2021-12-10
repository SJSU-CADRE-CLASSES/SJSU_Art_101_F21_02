class Player {
  constructor(){
    this.r = 60; //size of player
    this.x = w / 2;
    this.y = h - this.r;
  }

  display(){
    rect(this.x, this.y, this.r, this.r);
  }
}
