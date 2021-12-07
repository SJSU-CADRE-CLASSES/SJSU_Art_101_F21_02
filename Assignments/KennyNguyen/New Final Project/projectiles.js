
class Projectile {
  constructor(){
    this.r = 10;
    this.x = player.x;
    this.y = player.y - player.r / 2;
    this.speed = 10;
  }

  display(){
    ellipse(this.x, this.y, this.r, this.r);
    // rect(this.x, this.y, this.r, this.r);
  }

  move(){
    this.y -= this.speed;
  }
}
