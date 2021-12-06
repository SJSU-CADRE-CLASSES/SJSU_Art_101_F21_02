
class Projectile {
  constructor(){
    this.r = 8;
    this.x = player.x;
    this.y = player.y;
    this.speed = 8;
  }

  display(){
    ellipse(this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y -= this.speed;
  }
}
