
class Missile {
  constructor(){
    this.r = 70;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 50;
  }

  display(){
    image(missileImg, this.x, this.y, this.r, this.r)
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y++;
  }
}